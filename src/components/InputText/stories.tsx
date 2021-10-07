import { Story, Meta } from '@storybook/react'
import InputText, { InputTextProps } from '.'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'

export default {
  title: 'InputText',
  component: InputText,
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  },
  args: {
    name: 'input',
    initialValue: '',
    placeholder: 'input'
  }
} as Meta

export const Default: Story<InputTextProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
)

export const withLabel: Story<InputTextProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
)
withLabel.args = {
  label: 'Input text'
}

export const withError: Story<InputTextProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
)
withError.args = {
  error: 'field is required'
}

export const withIcon: Story<InputTextProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
)
withIcon.args = {
  icon: <EmailOutline />
}

export const withIconAndError: Story<InputTextProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
)
withIconAndError.args = {
  icon: <EmailOutline />,
  error: 'field is required'
}
