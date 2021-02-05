const SectionTitle = ({ title, id }) => {
  return (
    <>
      <h1 id={id} className="text-center mb-4">
        {title}
      </h1>
      <style jsx>{`
        h1 {
          font-weight: 900;
          padding-top: 4rem;
        }      
      `}
      </style>
    </>
  )
}

export default SectionTitle
