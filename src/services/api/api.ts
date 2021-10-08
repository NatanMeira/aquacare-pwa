export default class Api {
  private API_URL: string
  private TOKEN: string

  constructor() {
    this.API_URL = process.env.NEXT_PUBLIC_API_URL!
    this.TOKEN = 'Bearer ' + window.localStorage.getItem('token')
  }

  makePost = (uri: string, body: any) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.TOKEN
        },
        body: JSON.stringify(body)
      }
    }
  }

  makeGet = (uri: string) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'GET',
        headers: {
          Authorization: this.TOKEN
        }
      }
    }
  }

  makePut = (uri: string, body: any) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.TOKEN
        },
        body
      }
    }
  }

  makeDelete = (uri: string) => {
    return {
      url: this.API_URL + uri,
      options: {
        method: 'DELETE',
        headers: {
          Authorization: this.TOKEN
        }
      }
    }
  }
}
