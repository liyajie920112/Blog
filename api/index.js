export const apiBlogList = '/api/blog/list2'
export const apiBlogByTitle = '/api/blog/title'
export class Api {
  constructor(axios) {
    this.axios = axios
  }

  getBlogList(params) {
    return this.axios({
      url: apiBlogList,
      method: 'get',
      params
    })
  }

  getBlog(params) {
    return this.axios({
      url: apiBlogByTitle,
      method: 'get',
      params
    })
  }
}
