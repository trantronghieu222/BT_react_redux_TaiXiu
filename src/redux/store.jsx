import {configureStore} from '@reduxjs/toolkit';
import BaiTapXucXacReducers from './reducers/BaiTapXucXacReducers';
export const store = configureStore({
    reducer : {
        BaiTapXucXacReducers
    }
})
export default store;