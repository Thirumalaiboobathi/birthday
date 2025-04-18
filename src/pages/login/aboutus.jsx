import React, { useState, useEffect } from "react";
import cpclAboutImg from "../../assets/Chennai-Petroleum-Corporation.avif";
import { Typography, Box, Avatar, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../../component/common/navbarlogin";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// Circular Progress Component
const CircularProgress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < percentage ? Math.min(prev + 1, percentage) : prev));
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="60" cy="60" r={radius}
        stroke="#e6e6e6" strokeWidth={strokeWidth} fill="none"
      />
      <circle
        cx="60" cy="60" r={radius}
        stroke="red" strokeWidth={strokeWidth} fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
      />
      <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="1px" dy=".3em" fontSize="18">
        {progress}%
      </text>
    </svg>
  );
};

const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />

      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "70vh", md: "90vh" },
          overflow: "hidden",
          marginTop: "100px",
        }}
      >
        <img
          src={cpclAboutImg}
          alt="CPCL About"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to top right, hsla(0, 0%, 97%, 0.97) 0%, transparent 50%)`,
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
            px: 2,
            width: { xs: "90%", sm: "auto" }
          }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ color: "blue", fontWeight: "bold" }}
          >
            Delivering energy in
          </Typography>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ color: "blue", fontWeight: "bold" }}
          >
            The downstream<span style={{ color: "red" }}>.</span>
          </Typography>
        </Box>
      </Box>

      {/* Text Section */}
      <Box sx={{ p: { xs: 3, sm: 5, md: 6 }, width: "100%" }}>
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          gutterBottom
          sx={{ textAlign: "left" }}
        >
          Providing <span style={{ color: "red", fontWeight: "bold" }}>energy.</span><br />
          Improving <span style={{ color: "red", fontWeight: "bold" }}>lives.</span>
        </Typography>

        <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
          Chennai Petroleum Corporation Limited (CPCL), one of the leading group companies of IndianOil’s...
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          Today, CPCL stands tall among the public-sector refining companies in India...
        </Typography>

        {/* Statistics */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap"
          }}
        >
          {/* Rupee Avatar & Label */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "red", width: 56, height: 56 }}>
              <CurrencyRupeeIcon sx={{ color: "white", fontSize: 32 }} />
            </Avatar>
            <Typography
              sx={{
                color: "blue",
                fontSize: { xs: 18, sm: 24 },
                fontWeight: "bold",
                textAlign: "center",
                mt: 1,
              }}
            >
              Present<br />
              Shareholders
            </Typography>
          </Box>

          {/* Circular Stats */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CircularProgress percentage={67.2} />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: 16 }}
            >
              Promoter &<br />Promoter Group<br />Shareholding
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CircularProgress percentage={32.71} />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: 16 }}
            >
              Other Shareholders<br />
              (Public, Banks, Insurance Companies,<br />
              UTI, Mutual Funds, IEPF, NRI’s etc.)
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
