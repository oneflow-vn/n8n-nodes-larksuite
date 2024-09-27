import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /calendar/v4/calendars/{calendar_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Obtain a calendar'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Obtain a calendar'],
      },
    },
  },
]
