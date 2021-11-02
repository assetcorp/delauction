import appConfig from '../config/app.config'
import { signJwt } from '../utils'

export const userLogin = async ( secret ) => {
  try {
    // All fields are required
    if ( !secret ) {
      throw new Error( 'One or more fields has not been set. Required fields: [secret]' )
    }

    // Verify user by secret
    if ( secret !== appConfig.ADMIN_LOGIN_CODE ) {
      throw new Error( 'Invalid Admin secret' )
    }

    // Sign JWT
    const token = signJwt( { secret } )

    return {
      error: false,
      message: 'Admin successfully logged in',
      status: 200,
      token,
    }

  } catch ( error ) {
    return {
      error: true,
      message: error.message || 'There was an internal server error',
      status: 500
    }
  }
}