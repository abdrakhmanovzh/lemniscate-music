import { TArtist } from '@/modules/artists'

export type TTrack = {
  album: {
    images: {
      height: number
      width: number
      url: string
    }[]
    external_urls: {
      spotify: string
    }
    available_markets: string[]
    total_tracks: number
    release_date: string
    album_type: string
    href: string
    name: string
    id: string
  }
  duration_ms: number
  popularity: number
  artists: TArtist[]
  name: string
  id: string
}
