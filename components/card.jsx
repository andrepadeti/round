import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, text, link, image }) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card">
        <div className="p-5">
          <Image
            src={`/images/${image}.svg`}
            layout="responsive"
            width={100}
            height={100}
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link href={link}>
            <button className="btn btn-primary">Saiba mais</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
