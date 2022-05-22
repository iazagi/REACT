import { photo } from 'pexels';
import {PhotoState , photosActions, GET_PHOTOS, SET_ERROR} from '../types';

const initState: PhotoState = {
    photos: [],
    Total_results: 0,
    error: '';
}

const photoReducer = (state = initState , action: PhotoAction): PhotoState=>{
    switch (action.type){
        case GET_PHOTOS:
            const { page, photos, Total_results } = action.payload;
            let photosArr : Photo[] = [];
            if(page>1){
                photosArr = [...state.photos, ...photos];
            }else{
                photosArr = photos;
            }
            return{
                ...state,
                photos: photosArr,
                Total_results : Total_results,
                error: ''
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.payload
            }
         default:
             return state;
     }
}

export default photoReducer;