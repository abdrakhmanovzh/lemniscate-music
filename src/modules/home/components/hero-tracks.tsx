import { TrackCard } from '@/modules/track'

const tracks = [
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27348341e864d4b4881f56f01b4',
    title: 'Falling Behind',
    artist: 'Laufey'
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44',
    title: 'FE!N (feat. Playboi Carti)',
    artist: 'Travis Scott'
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f',
    artist: 'Kanye West',
    title: 'Runaway'
  }
]

export function HeroTracks() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <h2 className="dark:text-base-white text-2xl font-semibold">tracks.</h2>
      {tracks.map((track) => (
        <TrackCard
          imageUrl={track.imageUrl}
          artist={track.artist}
          title={track.title}
          key={track.title}
        />
      ))}
    </div>
  )
}
