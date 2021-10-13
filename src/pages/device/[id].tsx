import { GetServerSidePropsContext } from 'next'
import Status from 'templates/Status'
import protectedRoutes from 'utils/protected-routes'

export default function AquariumStats() {
  return <Status />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
