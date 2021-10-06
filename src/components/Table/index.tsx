/* eslint-disable react/jsx-key */
import * as S from './styles'
import { useTable } from 'react-table'

type ColumnsProps = {
  Header: string
  accessor: string
}

export type TableProps = {
  columns: ColumnsProps[]
  data: any[]
}

const Table = ({ columns, data }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <S.Table {...getTableProps()}>
      <S.THead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.TH {...column.getHeaderProps()}>
                {column.render('Header')}
              </S.TH>
            ))}
          </tr>
        ))}
      </S.THead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <S.TR {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <S.TD {...cell.getCellProps()}>{cell.render('Cell')}</S.TD>
              ))}
            </S.TR>
          )
        })}
      </tbody>
    </S.Table>
  )
}

export default Table
