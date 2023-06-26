import { useNavigate , Link } from "react-router-dom";
import "./home.css"
import abacateImg from "../../Images/Abacate pequeno.png";


function Home() {

    const navigate = useNavigate();

    return (
    
        <div className="home">

            <div className="imagem-container">
                <img id="abacate" src={abacateImg} alt="Abacate" />
            </div>

            <h1 id="login"><strong>Faça seu login para começar</strong></h1>

            <input className="input" type="text" placeholder="Email"/>

            <input className="input" type="text" placeholder="Senha"/>        

            <div id="entrar" onClick={() => {navigate('/detail')}}>Entrar</div>
            
            <div id="criar" onClick={() => {navigate('/cadastro')}}>Criar conta</div>

            <p><u>Esqueci minha senha</u></p>

        </div>
    )

}

export default Home;