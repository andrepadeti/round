const Form = () => {
  const submit = async e => {
    e.preventDefault()
    // e.target.reset()

    const res = await fetch('https://formspree.io/f/myybvnvk', {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log(result)
  }

  return (
    <div className="row mb-6">
      <div className="col-12 col-md-8 m-auto">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input type="text" className="form-control" id="name" autoComplete='name' required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete='email'
              required
              aria-describedby="emailHelp"
            />
            {/* <div id="emailHelp" className="form-text">
              Seu endereço de email jamais será compartilhado com ninguém.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensagem
            </label>
            <textarea className="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
