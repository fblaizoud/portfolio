import Logo from "./Logo";

const Home = () => {
  return (
    <header className="home" id="home">
      <div className="home__content">
        <div className="home__content__text">
          <div className="home__content__text__text-one">Hello,</div>
          <div className="home__content__text__text-two">
            <Logo />
          </div>
          <div className="text-three" />
        </div>
      </div>
    </header>
  );
};

export default Home;
