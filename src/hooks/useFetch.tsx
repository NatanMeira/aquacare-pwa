import React from 'react'

function useFetch<T = unknown>() {
  const [data, setData] = React.useState<T>()
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(async ({ url, options }) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) throw new Error(json.message)
    } catch (err: any) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
      // eslint-disable-next-line no-unsafe-finally
      return { response, json }
    }
  }, [])
  return {
    data,
    loading,
    error,
    request
  }
}

export default useFetch
