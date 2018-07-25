import {INCREMENT,DECREASE} from "../constants/index.js";

const counter = (state = {count:0},action = {}) => {
    switch (action.type){
        case INCREMENT:
            return {count:state.count + 1};
        case DECREASE:
            return {count:state.count - 1}
        default:return state;
    }
};


export default counter;