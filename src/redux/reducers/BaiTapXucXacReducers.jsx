import XucXac from "../../GameTaiXiu/XucXac";

const stateDefault = {
    taiXiu: false,
    mangXucXac: [
        {ma:1,hinhAnh:'./img/1.png'},
        {ma:1,hinhAnh:'./img/1.png'},
        {ma:1,hinhAnh:'./img/1.png'}
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BaiTapXucXacReducers = (state=stateDefault,action)=>{
    switch(action.type){
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu
            return {...state}
        case 'PLAY_GAME':
            let mangXucXacRandom = [];
            for (let i=0; i<3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png`};
                mangXucXacRandom.push(xucXacNgauNhien);
            } 
            state.mangXucXac = mangXucXacRandom;
            state.tongSoBanChoi += 1;
            let tongSoDiem = mangXucXacRandom.reduce((tongDiem, XucXac, index)=> {
                return tongDiem += XucXac.ma;
            }, 0)
            if ((tongSoDiem > 11 && state.taiXiu === true) || tongSoDiem <= 11 && state.taiXiu === false){
                state.soBanThang += 1;
            }
            return {...state}
        default : return {...state}
    }
}
export default BaiTapXucXacReducers;