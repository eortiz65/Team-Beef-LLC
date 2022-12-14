

const AboutBeef = () => {
  return (
    <div>
      <section className="about-section">
        <div className="bret">
          <img src={require("../media/bret-paladin.png")} alt="Bret-Pic"/>
          <h1 className="bret-title">Bret "the Righteous Paladin" Borden</h1>
          <p className="bret-story"><span className="bret-initial">B</span>ret was definitely born to be the face of the party</p>
        </div>
        <div className="edward">
          <img src={require("../media/edward-rogue.png")} alt="Edward-Pic"/>
          <h1 className="edward-title">Edward "the trickster rogue" Yuabov</h1>
          <p className="edward-story"><span className="edward-initial">E</span>dward is as cunning as fox.</p>
        </div>
      </section>
    </div>
  )
}

export default AboutBeef