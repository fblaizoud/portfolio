import ButtonFb from "./ButtonFb";

const About = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__content__title">
          <span>About Me</span>
        </div>
        <div className="about__content__details">
          <div className="about__content__details__left">
            <img id="logo" src="./assets/fb.jpg" alt="avatar" />
          </div>
          <div className="about__content__details__right">
            <div className="about__content__details__right__topic">
              Welcome to my Portfolio !
            </div>
            <div className="about__content__details__right__scroll">
              <p>
                {`My name is Frederick, I'm ${currentYear - 1985} years old.`}
              </p>
              <p>
                I am currently following a 5-month-training as &quot;Web & Web
                Mobile Developer&quot; at Wild Code School Biarritz. Until then,
                I’d worked in metal construction for 17 years. I’ve participated
                in the making of many large-scale projects, such as the
                development of Grand Paris and the reorganization of the
                Paris-Orly airport.
              </p>
              <p>
                In 2020, I&apos;ve created a website based on Wordpress for my
                wife&apos;s jewelry company, Petite Amour. This experience has
                allowed me to express my creativity, using tools that I
                didn&apos;t master at all. I took a lot of pleasure in it, and
                it made me want to further explore this subject. Right there and
                then, I decided to change the course of my life and become a Web
                Developer.
              </p>
              <p>
                My training at Wild Code School will end at the end of July
                2022. I wish to continue my apprenticeship through a work-study
                program and am therefore looking for a partner company to start
                in September. Preferably in an innovative company, because I
                have a strong appetite for new technologies.
              </p>
            </div>
            <ButtonFb link="./assets/fb.pdf" text="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
