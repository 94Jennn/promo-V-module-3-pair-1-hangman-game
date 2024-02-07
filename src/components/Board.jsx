import React from "react";

function Board() {
  const cells = Array(7).fill(null);
  console.log(cells);

  return (
    <section className="page_board">
      {cells.map((cell, i) => (
        <div key={i} className="cell">
          {" "}
          {cell}{" "}
        </div>
      ))}
      <div className="grogu">👣</div>

      {/* <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div> */}
    </section>
  );
}

export default Board;
