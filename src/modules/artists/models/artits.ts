export type TArtist = {
  images: {
    height: number
    width: number
    url: string
  }[]
  followers: {
    total: number
    href: string
  }
  external_urls: {
    spotify: string
  }
  popularity: number
  genres: string[]
  href: string
  name: string
  type: string
  uri: string
  id: string
}
