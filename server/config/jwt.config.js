const envProcess = process.env

const JWTConfig = {
  secret: envProcess.JWT_SECRET
}

export default JWTConfig