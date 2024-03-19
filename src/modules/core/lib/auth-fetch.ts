import { cookies } from 'next/headers'

const baseURL = 'https://api.spotify.com/v1'

export const authFetch = (path: string, options?: RequestInit) => {
  const accessToken = cookies().get('access_token')

  return fetch(`${baseURL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
      ...options?.headers
    }
  })
}
