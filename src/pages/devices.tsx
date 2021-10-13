import { GetServerSidePropsContext } from 'next'
import Devices from 'templates/Devices'
import protectedRoutes from 'utils/protected-routes'

export default function Device() {
  return <Devices />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
