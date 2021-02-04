const SectionTitle = ({ title, id }) => {
  return (
    <>
      <h1 id={id} className="text-center mt-5 mb-4">
        {title}
      </h1>
      <style jsx>{`
        h1 {
          font-weight: 900;
        }      
      `}
      </style>
    </>
  )
}

export default SectionTitle
