import SEO from 'components/SEO'
import Layout from 'components/layout'
import Banner from 'components/exercicios/banner'
import Advertisement from 'components/exercicios/advertisement'

const Wrapper = ({
  page,
  meta,
  title,
  section,
  image,
  alt,
  button,
  children,
}) => {
  return (
    <Layout page={page}>
      <SEO meta={meta} />
      <div className="container">
        <Banner
          title={title}
          section={section}
          image={`${image}.svg`}
          alt={alt}
        />
        <div className="container-small">
          <div className="row row-cols-12">
            {children}
            <Advertisement course={section} button={button} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Wrapper
