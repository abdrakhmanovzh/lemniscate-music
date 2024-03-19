import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code') || ''
  const clientId = process.env.SPOTIFY_CLIENT_ID ?? ''
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? ''
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI ?? ''

  try {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: code
    })

    const response = await fetch('https://accounts.spotify.com/api/token', {
      headers: {
        Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString(),
      method: 'POST'
    })

    if (response.ok) {
      const { refresh_token, access_token } = await response.json()

      cookies().set('access_token', access_token, {
        httpOnly: true,
        maxAge: 3600
      })

      cookies().set('refresh_token', refresh_token, {
        maxAge: 3600 * 24,
        httpOnly: true
      })

      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  } catch (error) {
    console.log('ERROR', error)
    return NextResponse.redirect(new URL('/error', req.url))
  }
}
