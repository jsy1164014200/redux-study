import {INCREMENT,DECREASE} from "../constants/index.js";

export const increment = () => {
    return {
        type: INCREMENT
    }
};
export const decrease = () => {
    return {
        type: DECREASE
    }
};