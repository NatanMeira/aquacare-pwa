import * as S from './styles'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import InputText from 'components/InputText'
import Button from 'components/Button'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { LockPassword } from '@styled-icons/remix-line/LockPassword'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

const SignIn = () => {
  const routes = useRouter()
  const { push, query } = routes

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SignInSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        const result = await signIn('credentials', {
          ...values,
          redirect: false,
          callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
        })

        if (result?.url) {
          toast.success('Autenticado com sucesso!')
          return push(result?.url)
        }

        toast.error('Usuário ou senha incorretos!')
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao tentar autenticar o usuário, por favor tente novamente.'
        )
      }
    }
  })

  return (
    <S.Wrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.FormControl>
          <InputText
            name="email"
            type="email"
            onChange={formik.handleChange('email')}
            value={formik.values.email}
            icon={<EmailOutline />}
            onBlur={formik.handleBlur('email')}
            error={formik.touched.email ? formik.errors.email : undefined}
            placeholder="E-mail"
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
            placeholder="Senha"
          />
        </S.FormControl>

        <S.FormControl>
          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </S.FormControl>
      </S.Form>
      <S.SignUp>
        Não possui uma conta?
        <Link href="/sign-up">
          <a> Cadastre-se</a>
        </Link>
      </S.SignUp>
    </S.Wrapper>
  )
}

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('E-mail é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório')
})

export default SignIn
