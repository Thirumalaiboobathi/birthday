import React from "react";
import cpclAboutImg from "../../assets/Chennai-Petroleum-Corporation.avif";
import { Typography, Box } from "@mui/material";
import Navbar from "../../component/common/navbarlogin";

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />

      {/* Image Section */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: "90vh",
    overflow: "hidden",
    marginTop: "100px",
  }}
>
  <img
    src={cpclAboutImg}
    alt="CPCL About"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* Gradient overlay for bottom-left fade */}
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(to top right, hsla(0, 0.00%, 97.30%, 0.97) 0%, transparent 50%)`,
      pointerEvents: "none",
    }}
  />

  {/* Centered Text */}
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "20%",
      transform: "translate(-50%, -50%)",
      textAlign: "left",
    }}
  >
    <Typography
      variant="h3"
      sx={{ color: "blue", fontWeight: "bold" }}
    >
      Delivering energy in
    </Typography>
    <Typography
      variant="h3"
      sx={{ color: "blue", fontWeight: "bold" }}
    >
      The downstream<span style={{ color: "red" }}>.</span>
    </Typography>
  </Box>
</Box>

     {/* Text Section */}
<Box
  sx={{
    padding: "40px 20px",
    paddingLeft: "40px", // align to left side
    width: "100%",       // take full width
  }}
>
  <Typography variant="h4" gutterBottom sx={{ textAlign: "left" }}>
    Providing{" "}
    <span style={{ color: "red", fontWeight: "bold" }}>energy.</span>
    <br />
    Improving{" "}
    <span style={{ color: "red", fontWeight: "bold" }}>lives.</span>
  </Typography>

  <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
    Chennai Petroleum Corporation Limited (CPCL), one of the leading
    group companies of IndianOil’s, was conceived in 1960s as a 2.5
    million metric tonnes per annum (MMTPA) refinery designed to produce
    fuels and lubes base stock. At CPCL, the past five decades have an
    eventful, growth-oriented phase as the CPCL family built the
    organisation to reach the present stature of 10.5 MMTPA capacity.
  </Typography>

  <Typography variant="body1" sx={{ textAlign: "left" }}>
    Today, CPCL stands tall among the public-sector refining companies in
    India, with one of the most complex refineries of its kind in the
    country, producing an array of value-added petroleum products. It also
    pioneered key initiatives in several areas such as process
    optimisation, technology absorption, energy conservation, waste land
    reclamation and environment management.
  </Typography>
</Box>

    </div>
  );
};

export default AboutUs;
