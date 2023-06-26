import { useNavigate , Link } from "react-router-dom";

import abacatinho from "../../Images/Abacate pequeno.png";
import VisaoOff from '../../Images/VisaoOff.png';

import "./Cadastro.css";

function Cadastro() {


    const navigate = useNavigate();

    return (

        <div className="cad">
            
            <div className="imagem-container">
                <img id="abacate" src={abacatinho} alt="abacate" />
            </div>

            <h2 id="cancelar">Cancelar</h2>

            <h1><strong>Crie sua conta</strong></h1>

            <input className="input1" type="text" placeholder="Nome de usuário"/>

            <input className="input1" type="text" placeholder="Email"/> 

            <input className="input2" type="text" placeholder="Senha"/>

            <button id="cadastrar" onClick={() => {navigate('/Home')}}>Cadastrar</button>

            <p  onClick={() => {navigate('/Home')}}><u>Já tenho uma conta</u></p>

        </div>

    )
}

export default Cadastro;