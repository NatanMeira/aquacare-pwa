import { Story, Meta } from '@storybook/react/types-6-0'
import { Add } from '@styled-icons/fluentui-system-filled/Add'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'CADASTRAR'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />
withIcon.args = {
  size: 'small',
  children: 'ADICIONAR',
  icon: <Add />
}
