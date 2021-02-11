import Image from 'next/image'
import Link from 'next/link'

const BlogBanner = ({ title, section, image, alt }) => {
  return (
    <>
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h6>{section}</h6>
          <h1>{title}</h1>
        </div>
        <div className="col-12 col-md-6">
          <Image
            src={`/images/blog/${image}`}
            alt={alt}
            width={350}
            height={350}
            layout="responsive"
          />
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-weight: 900;
          }
        `}
      </style>
    </>
  )
}

export default BlogBanner
