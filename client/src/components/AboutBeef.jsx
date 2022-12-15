

const AboutBeef = () => {
  return (
    <div>
      <h1 className="about-intro">It all started with our first ever task assigned in unit 1 as a group for SEIR-9-19...Choose a team name. And thus Team Beef was born.</h1>
      <section className="about-section">
        <div className="bret">
          <img src={require("../media/bret-paladin.png")} alt="Bret-Pic"/>
          <h1 className="bret-title">Bret "the Righteous Paladin" Borden</h1>
          <a href="https://github.com/bordencodes">Git Hub</a>
          <br></br>
          <a href="http://www.linkedin.com/in/bret-borden">LinkedIn</a>
          <p className="bret-story"><span className="bret-initial">B</span>ret was definitely born to be the face of the party. Charisma oozes from every pore of his being, and he knows how to convey the necessary message to get the job done. He knows business, and sometimes is who you know and not what you know that is important, and thus he thrives in connections </p>
        </div>
        <div className="edward">
          <img src={require("../media/edward-rogue.png")} alt="Edward-Pic"/>
          <br></br>
          <a href="url">Git Hub</a>
          <br></br>
          <a href="url">LinkedIn</a>
          <h1 className="edward-title">Edward "the trickster rogue" Yuabov</h1>
          <p className="edward-story"><span className="edward-initial">E</span>dward is as cunning as fox. From the shadow he awaits for a moment to strike, and when you least expect it, he comes with a method that can make any button go from "Meh, a button" to "OOoooohhh what does this button do??".Out of nowhere.</p>
        </div>
        <div className="erwin">
          <img src={require("../media/erwin-fighter.png")} alt="Erwin-Pic"/>
          <br></br>
          <a href="url">Git Hub</a>
          <br></br>
          <a href="url">LinkedIn</a>
          <h1 className="erwin-title">Erwin "the veteran fighter" Ortiz</h1>
          <p className="erwin-story"><span className="erwin-initial">E</span>rwin experience on the field has given him the wisdom necessary to adapt to any situation. He can look and point out little cracks or vulnerable spots in your code. He might be a tad stubborn, but thats how experience gets imprinted on your soul, trial by fire.</p>
        </div>
        <div className="fredy">
          <img src={require("../media/fredy-mage.png")} alt="Fredy-Pic"/>
          <br></br>
          <a href="url">Git Hub</a>
          <br></br>
          <a href="url">LinkedIn</a>
          <h1 className="fredy-title">Fredy "the Archimage" Laksmono</h1>
          <p className="fredy-story"><span className="fredy-initial">F</span>redy, the savant, the prodigy, the chosen one, the genius behind Team Beef name. He goes by many titles. Alone in his tower, away from the mundane social interactions he studies, perfecting his craft to achieve the ultimate level of mastering FULL STACK on any environment </p>
        </div>
      </section>
    </div>
  )
}

export default AboutBeef