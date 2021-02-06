import { useFormik } from 'formik'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const sleep = ms => new Promise(r => setTimeout(r, ms))

const ContactForm = () => {
  // TODO formspree is validating email better then yup, causing a bug
  const submit = async (values, {setSubmitting, resetForm}) => {
    console.log(values.name)
    const res = await fetch('https://formspree.io/f/myybvnvk', {
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    console.log(result)

    setSubmitting(false) // maybe not necessary?
    const message = result.ok ? 'Formulário enviado' : 'Falha ao enviar'
    alert(message)
    result.ok && resetForm() 
  }

  return (
    <div className="row mb-6">
      <div className="col-12 col-md-8 m-auto">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Tamanho mínimo: 3 caracteres')
              .max(20, 'Tamanho máximo: 20 caracteres')
              .required('Campo obrigatório.'),
            email: Yup.string()
              .email('Endereço de email inválido.')
              .required('Campo obrigatório.'),
            message: Yup.string()
              .min(15, 'Tamanho mínimo: 15 caracteres')
              .max(300, 'Tamanho máximo: 300 caracteres')
              .required('Campo obrigatório.'),
          })}
          onSubmit={submit}
        >
          {({ isValid, isSubmitting, handleReset }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <Field
                  name="name"
                  type="text"
                  className="form-control"
                  aria-describedby="nameHelp"
                />
                <ErrorMessage
                  component="div"
                  id="nameHelp"
                  name="name"
                  className="form-text text-warning"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage
                  component="div"
                  id="emailHelp"
                  name="email"
                  className="form-text text-warning"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensagem
                </label>
                <Field
                  name="message"
                  as="textarea"
                  rows="3"
                  className="form-control"
                  aria-describedby="messagelHelp"
                />
                <ErrorMessage
                  component="div"
                  id="messagelHelp"
                  name="message"
                  className="form-text text-warning"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="btn btn-primary text-light"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ContactForm
