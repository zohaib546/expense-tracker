import React from "react";

function History() {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="plus">
          learn react <span>+10000</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          React <span>-250</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          React <span>-250</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          React <span>-250</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
}

export default History;
