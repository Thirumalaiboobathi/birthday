import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../index.css'
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
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100",
    height: "100vh",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.5s ease-in-out",
    display: "block",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
    padding: "0 10px",
    width: "100%",
    boxSizing: "border-box",
  };

  const aboutContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "30px 20px" : "50px",
    boxSizing: "border-box",
    width: "100%",
    margin: 0,
  };

  const textContainerStyle = {
    width: isMobile ? "100%" : "50%",
    paddingRight: isMobile ? "0" : "20px",
    fontSize: "1.1rem",
    color: "#333",
    textAlign: isMobile ? "center" : "left",
  };

  const imageContainerStyle = {
    width: isMobile ? "100%" : "40%",
    marginTop: isMobile ? "20px" : "0",
  };

  return (
    <div
      style={{
        width: "100vw",
        position:'relative',
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        boxSizing: "border-box",
        maxWidth: "100vw",
        top:65, 
        right:0,left:-20,
      }}
    >
    <Navbar/>
    
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

      <div style={aboutContainerStyle}>
        <div style={textContainerStyle}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'blue' }}>
            Chennai Petroleum Corporation Limited<span style={{ color: 'red' }}>.</span>
          </h2>
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            (A Government of India Enterprise and Group Company of IOCL)
          </p>
          <p>
            Chennai Petroleum Corporation Limited (CPCL), formerly known as Madras Refineries Limited (MRL), was formed as a joint venture in 1965 between the Government of India (GOI), AMOCO, and National Iranian Oil Company (NIOC). The present shareholders are IOCL, NICO, and others holding 51.89%, 15.40%, and 32.71% shares respectively.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", justifyContent: isMobile ? "center" : "flex-start" }}>
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
                transform: "translateY(5px)",
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

      <div style={{
        backgroundColor: "#f0f0f0",
        padding: isMobile ? "20px" : "30px 50px",
        marginTop: "50px",
        boxSizing: "border-box",
        fontSize: "0.9rem",
        color: "#555",
        textAlign: isMobile ? "center" : "left",
        width: "100%",
      }}>
        <p style={{ marginBottom: "10px" }}>
          © 2024 <strong>Chennai Petroleum Corporation Limited</strong>. All Rights Reserved.<br />
          &nbsp;|&nbsp; Disclaimer &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Sitemap &nbsp;|&nbsp; Contact Us &nbsp;|&nbsp; Screen Reader Access &nbsp;|&nbsp; Help Line to women in distress
        </p>
        <p>
          <strong>Contact Address:</strong> No.536, NA, ANNA SALAI, CHENNAI, Chennai, Tamil<br />
          Nadu, 600018
        </p>
      </div>
    </div>
  );
};

export default HomePage;
