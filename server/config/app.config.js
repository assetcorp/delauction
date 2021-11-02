const envProcess = process.env

const AppConfig = {
  WHITELIST_DOMAINS: JSON.parse( envProcess.WHITELIST_DOMAINS || '[]' ),
  ADMIN_LOGIN_CODE: envProcess.ADMIN_LOGIN_CODE,
}

export default AppConfig