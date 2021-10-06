/* eslint-disable react/jsx-key */
import * as S from './styles'
import { useTable } from 'react-table'
import Heading from '../Heading'
import Button from '../Button'
import { Add } from '@styled-icons/fluentui-system-filled/Add'

type ColumnsProps = {
  Header: string
  accessor: string
}

export type TableProps = {
  title: string
  columns: ColumnsProps[]
  data: any[]
  buttonLabel?: string
  buttonUrl?: string
}

const Table = ({
  columns,
  data,
  title,
  buttonLabel,
  buttonUrl
}: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <S.Wrapper>
      <Heading>{title}</Heading>
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
      {buttonUrl && buttonLabel && (
        <Button as={'a'} href={buttonUrl} icon={<Add />} fullWidth>
          {buttonLabel}
        </Button>
      )}
    </S.Wrapper>
  )
}

export default Table
