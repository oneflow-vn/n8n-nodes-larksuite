import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter_views/{filter_view_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Delete Filter View'],
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
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Delete Filter View'],
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
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Delete Filter View'],
      },
    },
  },
  {
    displayName: 'Filter View Id',
    name: 'filter_view_id',
    required: true,
    description: 'Filter view ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Delete Filter View'],
      },
    },
  },
]
/* eslint-disable */
