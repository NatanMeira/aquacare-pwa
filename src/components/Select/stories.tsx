import { Story, Meta } from '@storybook/react'
import SelectField, { SelectFieldProps } from '.'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default {
  title: 'Select',
  component: SelectField,
  argTypes: {
    options: {
      control: {
        type: 'string'
      }
    }
  },
  args: { options }
} as Meta

export const Default: Story<SelectFieldProps> = (args) => (
  <SelectField {...args} />
)

export const withoutOptions: Story<SelectFieldProps> = (args) => (
  <SelectField {...args} />
)
withoutOptions.args = {
  options: []
}

export const withLabel: Story<SelectFieldProps> = (args) => (
  <SelectField {...args} />
)
withLabel.args = {
  label: 'select'
}

export const withError: Story<SelectFieldProps> = (args) => (
  <SelectField {...args} />
)
withError.args = {
  error: 'field is required'
}
