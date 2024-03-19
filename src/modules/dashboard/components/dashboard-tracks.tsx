import { FetchErrorAlert } from '@/shared/components/ui/fetch-error-alert'
import { TrackCard } from '@/modules/track'

import { getDashboardTracks } from '../lib'

export async function DashboardTracks() {
  const { data: tracks, success, message } = await getDashboardTracks()

  return (
    <div className="flex flex-1 flex-col gap-3">
      <h2 className="dark:text-base-white text-2xl font-semibold">top tracks.</h2>

      {success ? (
        tracks?.map((track) => (
          <TrackCard
            imageUrl={track.album.images[0].url}
            artist={track.artists[0].name}
            title={track.name}
            key={track.id}
          />
        ))
      ) : (
        <FetchErrorAlert message={message} />
      )}
    </div>
  )
}
