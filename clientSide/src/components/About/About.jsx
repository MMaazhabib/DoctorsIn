import aboutimg from '../../assets/images/about.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutimg} alt="" />
            
          </div>
          {/* about content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <div className="heading">Proud to be one of the nations best</div>
            <p className="text__para">
            Proud to be one of the leading platforms connecting patients with skilled 
            Pakistani doctors, fostering healthcare accessibility and excellence nationwide. 
            Our platform empowers patients to access quality healthcare services from a diverse 
            range of experienced Pakistani doctors. With a commitment to innovation and patient-centered 
            care, we strive to improve health outcomes and promote wellness within the Pakistani community. 
            </p>
            <p className="textpara mt-[30px]">
            As a trusted network, we facilitate seamless connections between patients and doctors, 
            ensuring personalized and efficient medical consultations. Join us in shaping the future 
            of healthcare, where every Pakistani has access to top-notch medical expertise and compassionate care."
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
