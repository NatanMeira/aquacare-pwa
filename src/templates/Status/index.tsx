import * as S from './styles'
import Base from 'templates/Base'
import { useRouter } from 'next/router'
import Table from 'components/Table'
import { useSession } from 'next-auth/client'
import useFetch from 'hooks/useFetch'
import { Stats } from 'services/api/Models'
import { statsColumns } from 'components/Table/templates'
import { useEffect } from 'react'
import { AQUARIUM_STATS } from 'services/api/Repository/aquarium'

const Status = () => {
  const [session] = useSession()
  const stats = useFetch<Stats[]>()

  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (id) {
      stats.request(AQUARIUM_STATS(+id), session)
    } else {
      router.push('/')
    }
  }, [])

  return (
    <Base>
      <S.Wrapper>
        {stats.data && (
          <Table
            title="Status do Aquário"
            columns={statsColumns}
            data={stats.data}
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Status
