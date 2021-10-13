/* eslint-disable react/display-name */
import Button from 'components/Button'
import Chip from 'components/Chip'
import { format } from 'date-fns'

export const aquariumColumns = [
  {
    Header: 'Nome',
    accessor: 'name'
  },
  {
    Header: 'Liters',
    accessor: 'liters'
  },
  {
    Header: 'Action',
    accessor: 'id',
    Cell: (row: any) => (
      <Button as={'a'} href={`/aquarium/${row.value}`}>
        VER STATUS
      </Button>
    )
  }
]

export const statsColumns = [
  {
    Header: 'Status',
    accessor: 'amonia',
    Cell: (props) => {
      return (
        <Chip
          label={props.value === 'safe/alert' ? 'SEGURO' : 'PERIGOSO'}
          color={props.value === 'safe/alert' ? 'alarm' : 'toxic'}
        />
      )
    }
  },
  {
    Header: 'Habitável',
    accessor: 'is_habitable',
    Cell: (props) => {
      return props.value ? 'HABITÁVEL' : 'INABITÁVEL'
    }
  },
  {
    Header: 'Enviado em:',
    accessor: 'created_at',
    Cell: (props) => {
      return format(new Date(props.value), 'HH:mm - dd/MM/yyyy')
    }
  }
]

export const devicesColumns = [
  {
    Header: 'Código dos dispositivos',
    accessor: 'device_id'
  }
]
