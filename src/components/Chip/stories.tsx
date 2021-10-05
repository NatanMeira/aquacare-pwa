import { Story, Meta } from '@storybook/react'
import Chip, { ChipProps } from '.'

export default {
  title: 'Chip',
  component: Chip
} as Meta

export const Default: Story<ChipProps> = (args) => <Chip {...args} />
Default.args = {
  label: 'Chip'
}
