import React,{Component} from "react";

export default class App extends Component {

    handleIncrement = (event) => {

    };
    handleDecrease = (event) => {

    };
    render = () => (
      <div className="container">
          <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
          <p className="text-center">
              <button className="btn btn-primary mr-2" onClick={this.props.onIncrement}>Increment</button>
              <button className="btn btn-danger mr-2" onClick={this.props.onDecrease}>Decrease</button>
          </p>
      </div>
    );
}