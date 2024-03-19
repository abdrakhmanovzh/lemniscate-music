import { APIResponse } from '@/modules/core/models'
import { authFetch } from '@/modules/core/lib'

export async function getFilteredData({
  category,
  period
}: {
  category: string
  period: string
}): Promise<APIResponse<any>> {
  try {
    const response = await authFetch(`/me/top/${category}?time_range=${period}&limit=20`)

    if (response.ok) {
      const data = await response.json()

      return {
        data: data.items,
        success: true
      }
    } else if (response.status === 403) {
      return {
        message: 'you need a spotify premium account to access this feature',
        success: false
      }
    } else {
      throw new Error('failed to fetch the data')
    }
  } catch (error) {
    return {
      message: (error as Error).message,
      success: false
    }
  }
}
