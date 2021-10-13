import * as S from './styles'
import Base from 'templates/Base'
import { useRouter } from 'next/router'
import Table from 'components/Table'
import { useSession } from 'next-auth/client'
import useFetch from 'hooks/useFetch'
import { Device } from 'services/api/Models'
import { devicesColumns } from 'components/Table/templates'
import { useEffect } from 'react'
import { GET_DEVICES } from 'services/api/Repository/device'

const Devices = () => {
  const [session] = useSession()
  const { request, data } = useFetch<Device[]>()

  const router = useRouter()

  useEffect(() => {
    request(GET_DEVICES(session?.id as number), session)
    if (data) {
      router.push('/')
    }
  }, [])

  return (
    <Base>
      <S.Wrapper>
        {data && (
          <Table
            title="Dispositivos adicionados"
            columns={devicesColumns}
            data={data}
            buttonLabel={'Adicionar um novo dispositivo'}
            buttonUrl={'/device/create'}
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Devices
