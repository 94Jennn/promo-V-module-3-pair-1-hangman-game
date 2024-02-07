import { useState } from 'react';
import '../scss/App.scss';
import Board from './Board';
import Main from './Main';
import Header from './Header';
import Dice from './Dice';
import GameStatus from './GameStatus';

function App() {

  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪' ]);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚' ]);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸' ]);
  const [pies, setPies] = useState(0);
  const [gameStatus,setGameStatus] =useState ("En curso");
  const [board, setBoard] = useState ([]);


  //setBoard (board.fill(null,0,7));
  console.log (board)
  


  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
 //Hay que mirar esta función:
  const rollDice = () => {
    const numberRandom = getRandomNumber(4);
    console.log(numberRandom);

    if(numberRandom === 4){
      setPies(pies + 1);
      setGameStatus("Groku avanza una casilla");
      console.log(pies)
    } else if (numberRandom === 1 && cookies.length>0){ 
      setCookies (cookies.slice(1));
      console.log(cookies)
      setGameStatus("Groku se come un cookie");
      
    }  else if (numberRandom === 2 && eggs.length>0){
      setEggs (eggs.slice(1));
      console.log(eggs)
      setGameStatus("Groku se come un huevo");
     
    } else if (numberRandom === 3 && frogs.length>0){
        setFrogs (frogs.slice(1));
        console.log(frogs)
        setGameStatus("Groku se come una rana");
        
    }
  }


  return (
    <div className="page">

    <Header/>
    <Main rollDice = {rollDice}/>
    <GameStatus status = {gameStatus}/>
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

 
    </div>
  );
} 



export default App;