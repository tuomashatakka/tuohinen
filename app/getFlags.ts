import { FlagOverridesType, decrypt } from '@vercel/flags'
import { type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getFlags (request: NextRequest) {
  const overrideCookie = cookies().get('vercel-flag-overrides')?.value

  const overrides   = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {}

  const exampleFlag = overrides?.exampleFlag ?? false
 
  const flags       = {
    exampleFlag,
  }
 
  return flags
}