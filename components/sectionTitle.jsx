const SectionTitle = ({ title, id, darkBackground = false }) => {
  return (
    <>
      <div className="blank" />
      <h1 id={id} className={`text-center mb-4 ${darkBackground && 'text-light'}`}>
        {title}
      </h1>
      <style jsx>
        {`
          .blank {
            height: 6rem;
          }

          h1 {
            font-weight: 900;
          }

          @media screen and (max-width: 575px) {
            // this is a tweak for the a href scrolling positioning
            // https://css-tricks.com/hash-tag-links-padding/
            h1::before {
              display: block;
              content: ' ';
              margin-top: -285px;
              height: 285px;
              visibility: hidden;
              pointer-events: none;
            }
          }

          @media screen and (min-width: 576px) {
            h1::before {
              display: block;
              content: ' ';
              margin-top: -64px;
              height: 64px;
              visibility: hidden;
              pointer-events: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default SectionTitle
