import marked from 'marked'
marked.setOptions({
  renderer: markdownRender(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
function markdownRender() {
  const renderer = new marked.Renderer()
  // Override function
  renderer.paragraph = (text) => {
    const prefix = '::: tags\n'
    if (text.startsWith(prefix)) {
      // const v = text.slice(prefix.length).replace('\n:::', '')
      return ''
    } else if (text.startsWith('<img')) {
      return `<p class="image">${text}</p>`
    }
    return `<p>${text}</p>`
  }
  renderer.code = (code, infostring, escaped) => {
    const langClass = `language-${infostring}`
    const html = `<pre class="line-numbers ${langClass}"><code class="${langClass}">${code}</code></pre>`
    return html
  }
  return renderer
}

function parseHNav(md) {
  const tokens = marked.lexer(md)
  const hs = tokens.filter(a => a.type === 'heading')
  return hs
}

function parseMarkdown(mdStr) {
  return marked(mdStr)
}

export { parseMarkdown, parseHNav }
