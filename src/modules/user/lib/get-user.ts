import { APIResponse } from '@/modules/core/models'
import { authFetch } from '@/modules/core/lib'

import { TUser } from '../models'

export async function getUser(): Promise<APIResponse<TUser>> {
  try {
    const response = await authFetch('/me')

    if (response.ok) {
      const user = (await response.json()) as TUser

      return {
        success: true,
        data: user
      }
    } else {
      throw new Error('Failed to fetch the user')
    }
  } catch (error) {
    return {
      message: (error as Error).message,
      success: false
    }
  }
}
