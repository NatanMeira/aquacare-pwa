import * as S from './styles'
import * as yup from 'yup'
import useFetch from 'hooks/useFetch'
import { Aquarium } from 'services/api/Models'
import { useFormik } from 'formik'
import InputText from 'components/InputText'
import Button from 'components/Button'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { DEVICE_CREATE } from 'services/api/Repository/device'
import { useSession } from 'next-auth/client'
import SelectField, { SelectOption } from 'components/Select'
import { useEffect } from 'react'
import { USER_AQUARIUMS } from 'services/api/Repository/aquarium'

const AddDevice = () => {
  const { request } = useFetch<Aquarium>()
  const [session] = useSession()

  const formik = useFormik({
    initialValues: {
      device_id: '',
      aquarium_id: ''
    },
    validationSchema: AddDeviceSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      console.log(values)

      try {
        const user_id = session?.id as number
        const { device_id } = values
        const aquarium_id = +values.aquarium_id

        const { response } = await request(
          DEVICE_CREATE({
            device_id,
            aquarium_id,
            user_id
          }),
          session
        )

        if (response && response.ok) {
          toast.success('Dispositivo adicionado com sucesso!')
          Router.push('/devices')
        }
      } catch (err) {
        toast.error('Falha ao adicionar um dispositivo')
      }
    }
  })

  const aquariums = useFetch<Aquarium[]>()

  useEffect(() => {
    aquariums.request(USER_AQUARIUMS(session?.id as number), session)
  }, [])

  return (
    <S.Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <S.FormControl>
          <InputText
            name="device_id"
            type="text"
            onChange={formik.handleChange('device_id')}
            value={formik.values.device_id}
            onBlur={formik.handleBlur('device_id')}
            error={
              formik.touched.device_id ? formik.errors.device_id : undefined
            }
            placeholder="Nome de aquário"
            label={'Código do Dispositivo'}
          />
        </S.FormControl>

        <S.FormControl>
          <SelectField
            name="aquarium_id"
            onInputChange={formik.handleChange('aquarium_id')}
            value={formik.values.aquarium_id}
            onBlur={formik.handleBlur('aquarium_id')}
            error={
              formik.touched.aquarium_id ? formik.errors.aquarium_id : undefined
            }
            label={'Aquário'}
            placeholder={'Selecione um aquário'}
            options={
              aquariums?.data?.map<SelectOption>((aquarium) => ({
                value: String(aquarium.id),
                label: aquarium.name
              })) || []
            }
          />
        </S.FormControl>

        <S.FormControl>
          <Button type="submit" fullWidth>
            Adicionar dispositivo
          </Button>
        </S.FormControl>
      </form>
    </S.Wrapper>
  )
}

const AddDeviceSchema = yup.object().shape({
  device_id: yup
    .string()
    .required('Código do dispositivo é um campo obrigatório'),
  aquarium_id: yup.string().required('Aquário é um campo obrigatório')
})

export default AddDevice
