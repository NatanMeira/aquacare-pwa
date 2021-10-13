import { GetServerSidePropsContext } from 'next'
import Base from 'templates/Base'
import AddDevice from 'components/Forms/AddDevice'
import protectedRoutes from 'utils/protected-routes'

export default function DeviceCreate() {
  return (
    <Base>
      <AddDevice />
    </Base>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
