module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': [2, {"anonymous": "never", "named": "never"}],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off'
  }
}
