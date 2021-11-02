import { userLogin } from "../controllers/app.controller"
import { validateRequest } from "../utils"

export const loginUser = async ( req, res ) => {
  try {
    const requiredBody = ['secret']
    if ( validateRequest( req, res, requiredBody, 'body' ) ) {
      const { secret } = req.body

      const user = await userLogin( secret )
      if ( user.error ) throw user

      return res
        .status( user.status )
        .send( user.token )
    }
  } catch ( error ) {
    return res
      .status( error.status || 500 )
      .send( { message: error.message || genericErrorMessage } )
  }
}