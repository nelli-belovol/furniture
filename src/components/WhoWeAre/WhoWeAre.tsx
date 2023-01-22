import styled from './WhoWeAre.module.scss';

const WhoWeAre = () => {
  return (
    <section className={styled.whoWeAreSection}>
      <div className={`container flexColumn ${styled.whoWeAreContainer}`}>
        <h2>WHO WE ARE ?</h2>
        <h3>DESIGNERS & INNOVATORS</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <button>GET A QUOTE</button>
      </div>
    </section>
  );
};

export default WhoWeAre;
