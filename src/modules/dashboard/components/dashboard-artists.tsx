import { FetchErrorAlert } from '@/shared/components/ui/fetch-error-alert'
import { ArtistCard } from '@/modules/artists'

import { getDashboardArtists } from '../lib'

export async function DashboardArtists() {
  const { data: artists, success, message } = await getDashboardArtists()

  return (
    <div className="flex flex-1 flex-col gap-3">
      <h2 className="dark:text-base-white text-2xl font-semibold">top artists.</h2>

      {success ? (
        artists?.map((artist) => (
          <ArtistCard imageUrl={artist.images[0].url} name={artist.name} key={artist.id} />
        ))
      ) : (
        <FetchErrorAlert message={message} />
      )}
    </div>
  )
}
