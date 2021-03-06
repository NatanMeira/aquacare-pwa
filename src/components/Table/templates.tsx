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
    Cell: (row: { value: any }) => (
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
    Cell: (props: { value: string }) => {
      return (
        <Chip
          label={props.value === 'safe/alert' ? 'SEGURO' : 'PERIGOSO'}
          color={props.value === 'safe/alert' ? 'alarm' : 'toxic'}
        />
      )
    }
  },
  {
    Header: 'Nível de Amônia',
    accessor: 'ppm',
    Cell: (props: { value: string }) => {
      return props.value === 'safe/alert'
        ? 'menor que 0.19ppm'
        : 'maior que 0.20ppm'
    }
  },
  {
    Header: 'Habitável',
    accessor: 'is_habitable',
    Cell: (props: { value: any }) => {
      return props.value ? 'HABITÁVEL' : 'INABITÁVEL'
    }
  },
  {
    Header: 'Enviado em:',
    accessor: 'created_at',
    Cell: (props: { value: string | number | Date }) => {
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
