import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Mailing List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Mailing List',
  value: 'Create A Mailing List',
  action: 'Create a mailing list',
  description:
    'Creates a mailing list.\r\n\r\nAPI reference documentation: [Create a mailing list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
