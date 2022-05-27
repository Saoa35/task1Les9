import React, { Component } from "react";
import Clock from "../Clock/Clock";


export default class ExampleError extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
        this.handleCreateError = this.handleCreateError.bind(this);
    }

    handleCreateError() {
        this.setState({
            isError: true
        })
    }

    render() {

        if(this.state.isError) {
            throw new Error('Error in Example Error!');
        }

        return(
            <div>
                <h2>Example Error Component</h2>
                <p>
                    <button onClick={this.handleCreateError}>
                        Create Error
                    </button>
                </p>
                {/* <Clock/> */}
            </div>
        )
    }
}