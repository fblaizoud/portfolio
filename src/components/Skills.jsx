import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__content">
        <div className="skills__content__title">
          <span>My Skills</span>
        </div>
        <div className="skills__content__details">
          <div className="skills__content__details__text">
            <div className="skills__content__details__text__left">
              <div className="skills__content__details__text__left__topic">
                &quot;The best performances are those that last&quot;
              </div>
              <div className="skills__content__details__text__left__scroll">
                <p>
                  This training has allowed me to master the fundamentals of Web
                  & Web Mobile development and of several computer languages
                  like React/NodeJS, Javascript, Sql, Sass and Tailwind CSS.
                  I’ve also learned to code on different team projects using
                  tools such as Git/Github, Postman, Trello and Figma.
                </p>
                <p>
                  Also, my previous experiences helped me gain knowledge on many
                  technical, managerial & commercial skills. They may not all be
                  transferable, but I hope many of those skills will help me
                  stand out in my work.
                </p>
                <p>
                  Throughout my career path, I’ve also proven to be adaptable
                  and up for a challenge. My colleagues and my entourage find me
                  sociable, perfectionist, a good listener and reliable.
                </p>
              </div>
            </div>
            <div className="skills__content__details__text__right">
              <SkillsList />
            </div>
          </div>
          <div className="skills__content__details__boxes">
            <div className="skills__content__details__boxes__box">
              <div className="skills__content__details__boxes__box__icon">
                <i className="fas fa-desktop" />
              </div>
              <div className="skills__content__details__boxes__box__topic">
                Web Development
              </div>
              <p>Coding in React/NodeJS</p>
            </div>
            <div className="skills__content__details__boxes__box">
              <div className="skills__content__details__boxes__box__icon">
                <i className="fas fa-quidditch" />
              </div>
              <div className="skills__content__details__boxes__box__topic">
                Wireframe
              </div>
              <p>Creation of wireframe with Figma</p>
            </div>
            <div className="skills__content__details__boxes__box">
              <div className="skills__content__details__boxes__box__icon">
                <i className="fas fa-tablet-alt" />
              </div>
              <div className="skills__content__details__boxes__box__topic">
                Apps Development
              </div>
              <p>Mobile application development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
