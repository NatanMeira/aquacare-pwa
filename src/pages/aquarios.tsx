import { GetServerSidePropsContext } from 'next'
import Aquariums from 'templates/Aquariums'
import protectedRoutes from 'utils/protected-routes'

export default function Aquarios() {
  return <Aquariums />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
