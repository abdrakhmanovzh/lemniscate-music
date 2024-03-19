export type TUser = {
  images: {
    height: number
    width: number
    url: string
  }[]
  followers: {
    total: number
    href: string
  }
  display_name: string
  country: string
  product: string
  email: string
  href: string
  type: string
  uri: string
  id: string
}
