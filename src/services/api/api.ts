export const makePost = (uri: string, body: any) => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL + uri,
    options: {
      method: 'POST',
      body: JSON.stringify(body)
    }
  }
}

export const makeGet = (uri: string) => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL + uri,
    options: {
      method: 'GET'
    }
  }
}

export const makePut = (uri: string, body: any) => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL + uri,
    options: {
      method: 'PUT',
      body
    }
  }
}

export const makeDelete = (uri: string) => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL + uri,
    options: {
      method: 'DELETE'
    }
  }
}
