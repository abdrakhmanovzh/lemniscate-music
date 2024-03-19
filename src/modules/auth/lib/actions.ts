'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login() {
  const params = new URLSearchParams({
    scope: 'user-read-private user-read-email user-top-read',
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI ?? '',
    client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
    response_type: 'code'
  })

  redirect(`https://accounts.spotify.com/authorize?${params.toString()}`)
}

export async function logout() {
  cookies().set('access_token', '', { maxAge: 0 })
  cookies().set('refresh_token', '', { maxAge: 0 })
}
