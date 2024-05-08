import React from 'react'
import { connect } from "react-redux";
const KetQuaGame = (props) => {
  return (
    <div>
        <h3>BẠN CHỌN: <span className="text-danger">{props.taiXiu ? 'TÀI' : 'XỈU'}</span></h3>
        <h3>SỐ BÀN THẮNG: <span className="text-success">{props.soBanThang}</span></h3>
        <h3>Tổng số bàn chơi: <span className="text-primary">{props.tongSoBanChoi}</span></h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.BaiTapXucXacReducers.taiXiu,
    soBanThang: state.BaiTapXucXacReducers.soBanThang,
    tongSoBanChoi: state.BaiTapXucXacReducers.tongSoBanChoi
  }
}

export default connect(mapStateToProps)(KetQuaGame);