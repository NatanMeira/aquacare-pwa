import { Story, Meta } from '@storybook/react'
import AquariumLastUpdateCard, { AquariumLastUpdateCardProps } from '.'

export default {
  title: 'AquariumLastUpdateCard',
  component: AquariumLastUpdateCard,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['safe/alert', 'alarm/toxic']
      }
    },
    updateAt: {
      control: {
        type: 'date'
      }
    }
  }
} as Meta

export const Habitable: Story<AquariumLastUpdateCardProps> = (args) => (
  <AquariumLastUpdateCard {...args} />
)
Habitable.args = {
  name: 'Nome do Aquario',
  liters: 165,
  updateAt: new Date('2000-09-09'),
  status: 'safe/alert',
  isHabitable: true
}

export const Uninhabitable: Story<AquariumLastUpdateCardProps> = (args) => (
  <AquariumLastUpdateCard {...args} />
)
Uninhabitable.args = {
  name: 'Nome do Aquario',
  liters: 165,
  updateAt: new Date('2000-09-09'),
  status: 'alarm/toxic',
  isHabitable: false
}
