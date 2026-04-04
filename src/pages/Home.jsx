function Home() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>Hi! I'm Max</h1>
        <p>
          I am an aspiring technology professional currently pursuing a B.S. 
          in Computer Science at Weber State University. I have a strong 
          foundation in software engineering, data analysis, cybersecurity, 
          and information technology, built through a combination of academic
          coursework, personal projects, and hands-on experience. I'm excited
          to continue learning and expanding my multidisciplinary skill set.
        </p>
        <div className="hero-actions">
          <a href="/about" className="button-outline">About Me</a>
          <a href="/portfolio" className="button-outline">View Projects</a>
          <a href="/contact" className="button-outline">Contact</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-visual-frame">
          <img src="/images/pfp.jpg" alt="Portfolio hero example" />
        </div>
      </div>
    </section>
  )
}

export default Home
