import { loginUser } from '../../../server/handlers/admin.handler'
import { runCors, setDefaultResponse } from '../../../server/utils'

const loginRoute = async ( req, res ) => {
  const method = req.method
  await runCors( req, res ) // Run the CORS middleware

  switch ( method ) {
    case 'POST':
      return loginUser( req, res )
    default:
      return setDefaultResponse( res )
  }
}

export default loginRoute