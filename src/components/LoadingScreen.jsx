import React from "react";
import { LinearProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <>
      <div className="spinner-box">
        <LinearProgress color="success" />
        <div className="charging-logo-section ">
          <img
            className="animate__animated  
                  animate__infinite	infinite animate__tada animate__slower"
            style={{ width: "200px" }}
            src="https://res.cloudinary.com/villalbad10/image/upload/v1657638689/micampo/IMG_1657638185108_1_o8gzy3.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
