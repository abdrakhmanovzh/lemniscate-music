import { ArtistCard } from '@/modules/artists'

const artists = [
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27332f5fec7a879ed6ef28f0dfd',
    name: 'TV Girl'
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022',
    name: 'Kendrick Lamar'
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2',
    name: 'Joji'
  }
]

export function HeroArtists() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <h2 className="dark:text-base-white text-2xl font-semibold">artists.</h2>
      {artists.map((artist) => (
        <ArtistCard imageUrl={artist.imageUrl} name={artist.name} key={artist.name} />
      ))}
    </div>
  )
}
