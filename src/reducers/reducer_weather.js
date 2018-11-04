import {FETCH_WEATHER} from '../actions/index';
import {DELETECITY} from '../actions/deleterow';
export default function(state=[],action){
    console.log("state:");
    console.log(state);
    console.log("action:");
    console.log(action);
    switch(action.type){
        case FETCH_WEATHER:
            console.log([action.payload.data, ...state]);
            return [action.payload.data, ...state];
        case DELETECITY:
            console.log([...state].filter((weather)=>{
                return weather.city.id!==action.payload
            }));
            return [...state].filter((weather)=>{
                return weather.city.id!==action.payload
            });
        default:
            return state;

        };        }