import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /calendar/v4/calendars/{calendar_id}/events/{event_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Delete an event'],
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
        resource: ['Calendar Event'],
        operation: ['Delete an event'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Delete an event'],
      },
    },
  },
]
