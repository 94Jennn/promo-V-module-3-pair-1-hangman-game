import { useState } from 'react';
import '../scss/App.scss';

function App() {

  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪' ]);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚' ]);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸' ]);
  const [pies, setPies] = useState(0);
  const [gameStatus,setGameStatus] =useState ("");

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  const rollDice = () => {
    const numberRandom = getRandomNumber(4);
    console.log(numberRandom);

    if(numberRandom === 4){
      setPies(pies + 1);
      setGameStatus('Groku avanza una casilla');
      console.log(pies)
    } else if (numberRandom === 1 && cookies.length>0){ 
      setCookies (cookies.splice(0,1));
      console.log(cookies)
    }  else if (numberRandom === 2 && eggs.length>0){
      setEggs (eggs.splice(0,1));
      console.log(eggs);
    } else if (numberRandom === 3 && frogs.length>0){
        setFrogs (frogs.splice(0,1));
        console.log(frogs);
    }
  }


  return (
    <div className="page">
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>

    <main className="page">
      <section className="page_board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice" onClick={rollDice} >Lanzar Dado</button>
        <div className={gameStatus}>En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
 
    </div>
  );
} 



export default App;