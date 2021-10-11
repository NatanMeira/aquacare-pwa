import Button from 'components/Button'

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
    Cell: (row) => (
      <Button as={'a'} href={`/aquario/${row.value}`}>
        VER STATUS
      </Button>
    )
  }
]
