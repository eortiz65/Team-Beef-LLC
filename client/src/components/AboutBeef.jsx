

const AboutBeef = () => {
  return (
    <div>
      <section className="about-section">
        <div className="bret">
          <img src={require("../media/bret-paladin.png")} alt="Bret-Pic"/>
          <h1 className="bret-title">Bret "the Righteous Paladin" Borden</h1>
          <a href="url">Git Hub</a>
          <br></br>
          <a href="url">LinkedIn</a>
          <p className="bret-story"><span className="bret-initial">B</span>ret was definitely born to be the face of the party</p>
        </div>
        <div className="edward">
          <img src={require("../media/edward-rogue.png")} alt="Edward-Pic"/>
          <h1 className="edward-title">Edward "the trickster rogue" Yuabov</h1>
          <p className="edward-story"><span className="edward-initial">E</span>dward is as cunning as fox.</p>
        </div>
        <div className="erwin">
          <img src={require("../media/erwin-fighter.png")} alt="Erwin-Pic"/>
          <h1 className="erwin-title">Erwin "the veteran fighter" Ortiz</h1>
          <p className="erwin-story"><span className="erwin-initial">E</span>rwin experience on the field has given him the wisdom necessary to adapt to any situation</p>
        </div>
        <div className="fredy">
          <img src={require("../media/fredy-mage.png")} alt="Fredy-Pic"/>
          <h1 className="fredy-title">Fredy "the Archimage" Laksmono</h1>
          <p className="fredy-story"><span className="fredy-initial">F</span>redy, the savant, the prodigy, the chosen one. He goes by many titles.</p>
        </div>
      </section>
    </div>
  )
}

export default AboutBeef