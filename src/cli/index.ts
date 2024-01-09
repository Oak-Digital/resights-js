import { Command, Option } from '@commander-js/extra-typings'
import packageJson from '../../package.json'
import { Resights } from '../'

export const program = new Command()
  .name('resights')
  .version(packageJson.version)
  .description(packageJson.description)
  .addOption(
    new Option('-t, --token <token>', 'The token to use for authentication')
      .env('RESIGHTS_API_TOKEN')
      .makeOptionMandatory(),
  )
  .argument('<service>', 'The service to use')
  .argument('<method>', 'The method to call')
  .addOption(new Option('--data <data>', 'The data to send to the API'))
  .action(async (service, methodName, { token, data }) => {
    // TODO: Make other services and methods work
    const client = new Resights(token)
    const result = await client.bfeBestemtFastEjendom.getProperties({})
    console.log(JSON.stringify(result, null, 2))
  })

program.parse()
