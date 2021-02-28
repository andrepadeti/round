import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, text, link, image, alt }) => {
  return (
    <div className="card bg-lighter mb-3 p-4 m-auto">
      <div className="row">
        <div className="col-md-4 text-center">
          <Image
            src={`/images/${image}.svg`}
            alt={alt}
            layout="intrinsic"
            width={150}
            height={150}
            className="card-img-top"
          />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <Link href={link}>
              {/* <button className="btn btn-primary text-light shadow"> */}
                Saiba mais
              {/* </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
