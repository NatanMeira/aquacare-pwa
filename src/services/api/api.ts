export default class Api {
  private API_URL: string

  constructor() {
    this.API_URL = process.env.NEXT_PUBLIC_API_URL!
  }

  makePost = (uri: string, body: any) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'POST',
        body: JSON.stringify(body)
      }
    }
  }

  makeGet = (uri: string) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'GET'
      }
    }
  }

  makePut = (uri: string, body: any) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'PUT',
        body
      }
    }
  }

  makeDelete = (uri: string) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'DELETE'
      }
    }
  }
}
