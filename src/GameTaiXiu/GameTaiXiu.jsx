import React from "react";
import "../assets/css/GameTaiXiu.css";
import XucXac from "./XucXac";
import KetQuaGame from "./KetQuaGame";
import { connect } from "react-redux";
const GameTaiXiu = (props) => {
  return (
    <div className="game">
      <div className="container">
        <div className="game__title">
          <h1 className="text-center p-5">GAME ĐỖ XÚC XẮC</h1>
        </div>

        <div className="row game__content text-center">
          <div className="col-4">
            <button onClick={()=>{
              props.datCuoc(true);
            }} className="btn btn-primary">Tài</button>
          </div>
          <div className="col-4">
            <XucXac></XucXac>
          </div>
          <div className="col-4">
            <button onClick={()=>{
              props.datCuoc(false);
            }} className="btn btn-primary">Xỉu</button>
          </div>
        </div>

        <div className="game__result text-center">
            <KetQuaGame></KetQuaGame>
            <button onClick={()=>{
              props.playgame();
            }} className="btn btn-success m-4">Play game</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
    return {
      datCuoc: (taiXiu) => {
        let action = {
          type : 'DAT_CUOC',
          taiXiu
        }
        dispatch(action);
      },
      playgame: () => {
        let action = {
          type : 'PLAY_GAME'
        }
        dispatch(action);
      }
    }
}

export default connect(null,mapDispatchToProp)(GameTaiXiu);
