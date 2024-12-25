import React from "react";

function Interface({ handleInterface, status }) {
  return (
    <div className="interface">
      <div className="info-interface">
        <input readOnly value={status}></input>
      </div>
      <div className="action-interface">
        <button
          className="generator-btn btn"
          onClick={() => {
            handleInterface("create");
          }}
        >
          Создать
        </button>
        <button
          className="validate-btn btn"
          onClick={() => {
            handleInterface("validate");
          }}
        >
          Проверить
        </button>
        <button
          className="solve-btn btn"
          onClick={() => {
            handleInterface("solve");
          }}
        >
          Решить
        </button>
        <button
          className="clear-btn btn"
          onClick={() => {
            handleInterface("clear");
          }}
        >
          Очистить
        </button>
      </div>
    </div>
  );
}

export default Interface;
