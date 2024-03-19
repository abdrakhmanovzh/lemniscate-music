import { APIResponse } from '@/modules/core/models'
import { authFetch } from '@/modules/core/lib'
import { TTrack } from '@/modules/track'

export async function getDashboardTracks(): Promise<APIResponse<TTrack[]>> {
  try {
    const response = await authFetch('/me/top/tracks?limit=3')

    if (response.ok) {
      const tracks = (await response.json()).items as TTrack[]

      return {
        success: true,
        data: tracks
      }
    } else {
      throw new Error('failed to fetch the tracks')
    }
  } catch (error) {
    return {
      message: (error as Error).message,
      success: false
    }
  }
}
