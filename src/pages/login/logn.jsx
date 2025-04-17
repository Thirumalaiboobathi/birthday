import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Navbar from '../../component/common/navbarlogin';
import { EffectFade, Autoplay } from "swiper/modules";
import cpclimg1 from "../../assets/cpclimg6.jpg";
import cpclimg2 from "../../assets/cpclimg7.avif";
import cpclimg3 from "../../assets/Chennai-Petroleum-Corporation.avif";
import cpclimg4 from "../../assets/cpclimg10.avif";
import cpclimg5 from "../../assets/cpclimage.webp";
import cpclimg6 from '../../assets/cpclimg10.avif';
import { ArrowForward } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom"; 

const images = [cpclimg1, cpclimg2, cpclimg3, cpclimg4, cpclimg5];
const texts = [
  "The Diamond Jubilee Refinery",
  "Leading in Energy Excellence",
  "Innovating for a Sustainable Future",
  "Commitment to Quality and Safety",
  "Empowering Progress Through Technology"
];

const HomePage = () => {
  const containerStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.5s ease-in-out",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
  };

  const aboutContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#f4f4f4",
  };

  const textContainerStyle = {
    width: "50%",
    paddingRight: "20px",
    fontSize: "1.2rem",
    color: "#333",
  };

  const imageContainerStyle = {
    width: "40%",
  };

  const navigate = useNavigate(); // Initialize navigate function

  const navigateToNextPage = () => {
    navigate("/next-page"); // Replace "/next-page" with your desired path
  };

  return (
    <div>
      <Navbar />
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={containerStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source media="(min-width: 1200px)" srcSet={image} />
              <source media="(min-width: 768px)" srcSet={image} />
              <img src={image} alt={`CPCL Image ${index + 1}`} style={imageStyle} />
            </picture>
            <div style={textStyle}>{texts[index]}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* About the Company Section */}
      <div style={aboutContainerStyle}>
  <div style={textContainerStyle}>
    <h2>Chennai Petroleum Corporation Limited.</h2>
    <p>
      (A Government of India Enterprise and Group Company of IOCL)
    </p>
    <p>
      Chennai Petroleum Corporation Limited (CPCL), formerly known as Madras Refineries Limited (MRL) was formed as a joint venture in 1965 between the Government of India (GOI), AMOCO, and National Iranian Oil Company (NIOC). The present shareholders are IOCL, NICO, and others holding 51.89%, 15.40%, and 32.71% shares respectively.
    </p>
    
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
      <h3 style={{ margin: 0 }}>About the company</h3>
      <ArrowForward 
        onClick={() => navigate("/aboutus")} 
        style={{
          cursor: "pointer",
          border: "2px solid #000",
          borderRadius: "50%",
          padding: "6px",
          fontSize: "1.8rem",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  </div>

      <div style={imageContainerStyle}>
        <img src={cpclimg6} alt="CPCL Logo" style={{ width: "100%", borderRadius: "10px" }} />
      </div>
    </div>

    </div>
  );
};

export default HomePage;