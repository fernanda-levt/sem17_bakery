function SubBanners({ title, subtitle, image }) {
  return (
    <section
      className="image-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="global-headline">
        <h2 className="sub-headline">{title}</h2>
        <h3 className="headline headline-dark">{subtitle}</h3>
      </div>
    </section>
  )
}

export default SubBanners
