import React from "react";
import { useNavigate } from "react-router-dom";
import abacateImg from "../../Images/Abacate.png";
import "./splash.css";

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">

        <div className="imagem-container">
            <img id="abacate" src={abacateImg} alt="Abacate" />
        </div>
        <button onClick={() => navigate("/home")}>
            Botão da tela de SplashScreen
        </button>

    </div>
  );
}

export default SplashScreen;