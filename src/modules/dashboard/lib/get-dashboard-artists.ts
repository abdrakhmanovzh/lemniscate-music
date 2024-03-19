import { APIResponse } from '@/modules/core/models'
import { authFetch } from '@/modules/core/lib'
import { TArtist } from '@/modules/artists'

export async function getDashboardArtists(): Promise<APIResponse<TArtist[]>> {
  try {
    const response = await authFetch('/me/top/artists?limit=3')

    if (response.ok) {
      const artists = (await response.json()).items as TArtist[]

      return {
        success: true,
        data: artists
      }
    } else {
      throw new Error('failed to fetch the artists')
    }
  } catch (error) {
    return {
      message: (error as Error).message,
      success: false
    }
  }
}
