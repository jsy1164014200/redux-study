import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App.js";


import {createStore} from "redux";

import counter from "./reducers/counter.js";
import {increment,decrease} from "./actions/index.js";

// 根据reducer创建一个store ，相当于绑定了reducer  **store相当于一个桥梁的作用**
const store = createStore(counter);



const render = () => {
    ReactDOM.render((
        <div>
            {/*store.dispatch() 相当于触发一下action，根据这个action执行一下对应的reducer 该表store.state*/}
            <App value={store.getState().count} onIncrement={() => store.dispatch(increment())} onDecrease={() => store.dispatch(decrease())}/>
        </div>
    ),document.body);
};
render();

// store.subscribe(() => console.log("State updated!",store.getState()));

// 因为 store.state 改变不会触发react的 shouldChang WillUpdate DidUpdate方法 所以 必须用redux自带的subscribe方法监听
store.subscribe(render);