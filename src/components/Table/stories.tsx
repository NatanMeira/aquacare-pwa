import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from '.'

export default {
  title: 'Table',
  component: Table,
  args: {
    columns: [
      {
        Header: 'Column 1',
        accessor: 'col1' // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
      },
      {
        Header: 'Column 3',
        accessor: 'col3'
      }
    ],
    data: [
      {
        col1: 'Row 1',
        col2: 'Row 2',
        col3: 'Row 3'
      },
      {
        col1: 'Row 1',
        col2: 'Row 2',
        col3: 'Row 3'
      },
      {
        col1: 'Row 1',
        col2: 'Row 2',
        col3: 'Row 3'
      }
    ]
  }
} as Meta

export const Default: Story<TableProps> = (args) => <Table {...args} />
Default.args = {
  title: 'Table'
}
export const withButton: Story<TableProps> = (args) => <Table {...args} />
withButton.args = {
  title: 'Table with link',
  buttonLabel: 'Click',
  buttonUrl: '/'
}
