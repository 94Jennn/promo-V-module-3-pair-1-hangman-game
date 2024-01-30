import { useState } from 'react';
import '../scss/App.scss';

function App() {

  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪' ]);

  const [pies, setPies] = useState(0);

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  const rollDice = (event) => {
    const numberRandom = getRandomNumber(4);
    console.log(numberRandom);

    if(numberRandom === 4){
      setPies(pies + 1);

    } else if (numberRandom === 1){ 
      setCookies
      

    } 

    // return (
    //   <div>
    //     <p>{mensaje}</p>
    //   </div>
    // );

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
        <div className="game-status">En curso</div>
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