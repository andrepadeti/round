import Image from 'next/image'
import Link from 'next/link'

const CourseDetails = ({ title, image, body, button }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>{title}</h1>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src={`/images/${image}.svg`}
              width={350}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 m-auto mb-5">
            {body.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="row mb-7">
          <div className="col-12 d-flex justify-content-center">
            <Link href='/#contato'>
              <button className="btn btn-lg btn-primary text-light shadow">
                {button.label}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-weight: 900;
          }

          button {
            width: 15rem;
          }
        `}
      </style>
    </>
  )
}

export default CourseDetails
