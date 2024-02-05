import Board from "./Board";
import Dice from "./Dice";

const Main = ({rollDice}) => {
    return <main className="page">
        <Board/>
        <Dice rollDice = {rollDice}/>
    </main>
}

export default Main;