import React, { useState , useEffect} from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import VovoJujuImg from '../../Images/Vovo juju.png';

import MCJUjuzao from '../../Images/MC Jujuzao.png';
import Patao from '../../Images/Patao.png';

import abacatinhoImg from '../../Images/Abacate pequeno.png';
import JujuNosAbacates from '../../Images/JujuNosAbacates.png';
import JujuPequena from '../../Images/Juju Pequena.png';
import MCJuju from '../../Images/MC juju.png';
import JujuPato from '../../Images/Pato.png';
import Play from '../../Images/play.png';
import Desistir from '../../Images/Desistir.png';

import './detail.css';

function Detail() {
    const navigate = useNavigate();
    const location =useLocation();

    const [overlayActive, setOverlayActive] = useState(false);
    const [jujuOverlayActive, setJujuOverlayActive] = useState(true);

    const [overlayUltimoActive, setOverlayUltimoActive] = useState(false);


    const [timerActive, setTimerActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [abacateCount, setAbacateCount] = useState(0);

    const [confirmOverlayActive, setConfirmOverlayActive] = useState(false);
    const showConfirmOverlay = () => {
      if (counter > 0) {
        setConfirmOverlayActive(true);
      }
    };

    const showOverlayUltimo = () => {
      setOverlayUltimoActive(true);
    };

    const startTimer = () => {
      setTimerActive(true);
    };

    const stopTimer = () => {
      setTimerActive(false);
      setOverlayUltimoActive(true);
    };

    const handleBarClick = (event) => {
      const bar = document.getElementById('barra');
      const barWidth = bar.offsetWidth;
      const clickPosition = event.clientX - bar.getBoundingClientRect().left;
      const clickPercentage = (clickPosition / barWidth) * 100;
      const time = Math.floor((clickPercentage / 100) * 60 *60);
      const remainingTime = 60 * 60 - time;
      setCounter(time);
    };

    const toggleTimer = () => {
      if (timerActive) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    useEffect(() => {
      let interval;

      if (timerActive) {
          interval = setInterval(() => {
            setCounter((prevCounter) => {
              if (prevCounter <= 0) {
                stopTimer();
                setAbacateCount((prevCount) => prevCount + 1); 
                setConfirmOverlayActive(true); 
                return 0;
              } else {
                return prevCounter - 1;
              }
            });
          }, 1000);
        }
      

      return () => clearInterval(interval);
    }, [timerActive]);

      const showOverlay = () => {
          setOverlayActive(true);
      };

      const showJujuOverlay = () => {
          setJujuOverlayActive(true);
      };

      const closeOverlay = () => {
          setOverlayActive(false);
          setJujuOverlayActive(false);
          setOverlayUltimoActive(false);
      };

      useEffect(() => {
          if (location.pathname === '/detail') {
          setJujuOverlayActive(false);
          }
      }, [location]);




      return (
          <div className="detail">
          <header>
              <div onClick={showOverlay} id="retangulo-contador">
              <img id="abacate-pequeno" src={abacatinhoImg} alt="" />
              <div className='abacate-count'>{abacateCount}</div>
              </div>
              <div className="imagem-juju-container">
              <img id="juju" src={VovoJujuImg} alt="Juju" onClick={showJujuOverlay}/>
              </div>
          </header>

          <div id='retangulo-timer'>
              <div id='barra' className='timer-counter' onClick={handleBarClick}>
                  {/* Aqui você pode exibir o tempo formatado */}
            {`${Math.floor(counter / 60)}:${(counter % 60)
              .toString()
              .padStart(2, '0')}`}
              </div>
              <div id='circulo' onClick={toggleTimer}>
                  <img id='play' src={Play} alt="" />
                  
              </div>  
          </div>

          <div className={`overlay ${overlayActive ? 'active' : ''}`} onClick={closeOverlay}>
              {}
              <h2 id='titulo'>Para que servem os abacate?</h2>
              <h3>Além de fazer bem e deixar o cabelo bonito, os abacates servem como moedas, ou seja, a cada timer completo você ganha um, porém se nao terminar vai perder abacate bem.</h3>
                  <img src={JujuNosAbacates} alt="Vovo Juju nos" />
              {}


              <div className={`overlay-content ${jujuOverlayActive ? 'juju-overlay' : ''}`}>

                  <div>
                      <div id='fundoJujuzinha'>
                          <img id='Jujuzinha' src={JujuPequena} alt="Vovo Juju" />
                      </div>
                      <div className='Nomes1'>
                              <p>Vovó Juju</p>
                      </div>
                  </div>

                  <div>
                      <div id='fundoMC' onClick={() => {navigate('/DetailMC')}}>
                          <img id='MC' src={MCJuju} alt="MC Juju" />
                      </div>
                      <div className='Nomes'>
                              <p>MC Juju</p>
                      </div>
                  </div>

                  <div>
                      <div id='fundoPato' onClick={() => {navigate('/DetailPato')}}>
                          <img id='Pato' src={JujuPato} alt="Vovo Juju pato" />
                      </div>
                      <div className='Nomes3'>
                          <p>Pato Juju</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className={`overlayUltimo ${overlayUltimoActive ? 'active' : ''}`} onClick={closeOverlay}>
            {}
            <h1 id='desistir'>Tem certeza que vai desistir bem?</h1>
            <h2 id='cuidado'>Cuidado, se desistir vai perder um abacate.<br></br>Como assim não gosta de abacate</h2>
            <img id='desistirImg' src={Desistir} alt="" />
          </div>

        </div>
    );
    }

    export default Detail;