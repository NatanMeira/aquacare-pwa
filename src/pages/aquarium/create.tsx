import { GetServerSidePropsContext } from 'next'
import Base from 'templates/Base'
import AddAquarium from 'components/Forms/AddAquarium'
import protectedRoutes from 'utils/protected-routes'

export default function AquariumCreate() {
  return (
    <Base>
      <AddAquarium />
    </Base>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
