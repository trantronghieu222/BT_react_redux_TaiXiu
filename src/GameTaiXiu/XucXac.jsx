// import React from 'react'
// import '../assets/css/GameTaiXiu.css';
// import xucXac1 from '../assets/img/1.png';
// import xucXac2 from '../assets/img/2.png';
// import xucXac3 from '../assets/img/3.png';
// import xucXac4 from '../assets/img/4.png';
// import xucXac5 from '../assets/img/5.png';
// import xucXac6 from '../assets/img/6.png';

// const XucXac = () => {
//   return (
//     <div className='imgXucXac'>
//         <img src={xucXac1} alt="" />
//         <img src={xucXac2} alt="" />
//         <img src={xucXac3} alt="" />
//     </div>
//   )
// }

// export default XucXac
import React from "react";
import { connect } from "react-redux";
import "../assets/css/GameTaiXiu.css";
const XucXac = (props) => {
  return (
    <div className="imgXucXac">
      {props.mangXucXac.map((XucXac, index) => {
        return <img key={index} src={XucXac.hinhAnh} alt={XucXac.hinhAnh} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapXucXacReducers.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
