import { ResightsOpenAPI } from './generated'

export class Resights extends ResightsOpenAPI {
  constructor(
    token: string,
    {
      baseUrl = 'https://api.resights.dk',
    }: {
      /**
       * The base URL of the API server, if you want to use something else.
       */
      baseUrl?: string
    } = {},
  ) {
    super({
      HEADERS: {
        Cookie: `token=${token}`,
      },
      BASE: baseUrl,
    })
  }
}
