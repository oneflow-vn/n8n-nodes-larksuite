import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/departments/{department_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Delete a department'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Delete a department'],
      },
    },
  },
]
