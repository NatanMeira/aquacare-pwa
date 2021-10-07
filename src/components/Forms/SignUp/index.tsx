import * as S from './styles'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import InputText from 'components/InputText'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { LockPassword } from '@styled-icons/remix-line/LockPassword'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { User } from '@styled-icons/boxicons-regular/User'

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: SignUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        // TODO: integrate with api
        toast.success('Registrado com sucesso!')
      } catch (err) {
        toast.error('Falha ao registrar um usuário')
      }
    }
  })

  return (
    <S.Wrapper>
      <Heading>REGISTRAR</Heading>
      <form onSubmit={formik.handleSubmit}>
        <S.FormControl>
          <InputText
            name="name"
            type="text"
            onChange={formik.handleChange('name')}
            value={formik.values.name}
            icon={<User />}
            onBlur={formik.handleBlur('name')}
            error={formik.touched.name ? formik.errors.name : undefined}
          />
        </S.FormControl>

        <S.FormControl>
          <InputText
            name="email"
            type="email"
            onChange={formik.handleChange('email')}
            value={formik.values.email}
            icon={<EmailOutline />}
            onBlur={formik.handleBlur('email')}
            error={formik.touched.email ? formik.errors.email : undefined}
          />
        </S.FormControl>

        <S.FormControl>
          <InputText
            name="password"
            type="password"
            onChange={formik.handleChange('password')}
            value={formik.values.password}
            icon={<LockPassword />}
            onBlur={formik.handleBlur('password')}
            error={formik.touched.password ? formik.errors.password : undefined}
          />
        </S.FormControl>

        <S.FormControl>
          <InputText
            name="passwordConfirmation"
            type="password"
            onChange={formik.handleChange('passwordConfirmation')}
            value={formik.values.passwordConfirmation}
            icon={<LockPassword />}
            onBlur={formik.handleBlur('passwordConfirmation')}
            error={
              formik.touched.passwordConfirmation
                ? formik.errors.passwordConfirmation
                : undefined
            }
          />
        </S.FormControl>

        <S.FormControl>
          <Button type="submit" fullWidth>
            Registrar
          </Button>
        </S.FormControl>
      </form>
    </S.Wrapper>
  )
}

const SignUpSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('E-mail é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'A confirmação de senha deve ser igual ao campo de senha '
    )
    .required('Confirmação de Senha é um campo obrigatório')
})

export default SignUp
