import * as S from './styles'
import * as yup from 'yup'
import useFetch from 'hooks/useFetch'
import { Aquarium } from 'services/api/Models'
import { useFormik } from 'formik'
import InputText from 'components/InputText'
import Button from 'components/Button'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { AQUARIUM_CREATE } from 'services/api/Repository/aquarium'
import { useSession } from 'next-auth/client'

const AddAquarium = () => {
  const { request } = useFetch<Aquarium>()
  const [session] = useSession()

  const formik = useFormik({
    initialValues: {
      name: '',
      liters: 1
    },
    validationSchema: AddAquariumSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      console.log(values)

      try {
        const { name } = values
        const user_id = session?.id as number
        const liters = +values.liters

        const { response } = await request(
          AQUARIUM_CREATE({
            liters,
            name,
            user_id
          }),
          session
        )

        if (response && response.ok) {
          toast.success('Aquário criado com sucesso!')
          Router.push('/aquarios')
        }
      } catch (err) {
        toast.error('Falha ao criar um aquário')
      }
    }
  })

  return (
    <S.Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <S.FormControl>
          <InputText
            name="name"
            type="text"
            onChange={formik.handleChange('name')}
            value={formik.values.name}
            onBlur={formik.handleBlur('name')}
            error={formik.touched.name ? formik.errors.name : undefined}
            placeholder="Nome de aquário"
            label={'Aquário'}
          />
        </S.FormControl>

        <S.FormControl>
          <InputText
            name="liters"
            type="number"
            onChange={formik.handleChange('liters')}
            value={formik.values.liters}
            onBlur={formik.handleBlur('liters')}
            error={formik.touched.liters ? formik.errors.liters : undefined}
            placeholder="Litragem do aquário"
            label={'Litros'}
            min={1}
          />
        </S.FormControl>

        <S.FormControl>
          <Button type="submit" fullWidth>
            Adicionar aquário
          </Button>
        </S.FormControl>
      </form>
    </S.Wrapper>
  )
}

const AddAquariumSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  liters: yup.number().required('A qtd de litros é um campo obrigatório')
})

export default AddAquarium
