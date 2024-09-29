import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/float_images/{float_image_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain A Floating Image'],
      },
    },
  },
  {
    displayName: 'Spreadsheet Token',
    name: 'spreadsheet_token',
    required: true,
    description: 'Spreadsheet token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain A Floating Image'],
      },
    },
  },
  {
    displayName: 'Sheet Id',
    name: 'sheet_id',
    required: true,
    description: 'Sheet ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain A Floating Image'],
      },
    },
  },
  {
    displayName: 'Float Image Id',
    name: 'float_image_id',
    required: true,
    description: 'Floating image ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain A Floating Image'],
      },
    },
  },
]
/* eslint-disable */
