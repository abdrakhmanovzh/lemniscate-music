import { FetchErrorAlert } from '@/shared/components/ui/fetch-error-alert'
import { ArtistCard, TArtist } from '@/modules/artists'
import { TrackCard, TTrack } from '@/modules/track'

import { getFilteredData } from '../lib'

interface Props {
  category: string
  period: string
}

export async function FilteredCards({ category, period }: Props) {
  const { success, message, data } = await getFilteredData({ category, period })

  if (success) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {category === 'tracks'
          ? (data as TTrack[]).map((track, index) => (
              <TrackCard
                imageUrl={track.album.images[0].url}
                artist={track.artists[0].name}
                title={track.name}
                key={track.id}
              />
            ))
          : (data as TArtist[]).map((artist) => (
              <ArtistCard imageUrl={artist.images[0].url} name={artist.name} key={artist.id} />
            ))}
      </div>
    )
  } else {
    return <FetchErrorAlert message={message} />
  }
}
