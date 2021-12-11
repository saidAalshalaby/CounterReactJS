import React, { Component } from 'react';   
import styled from 'styled-components';

const Button = styled.button`
background-color: ${(props)=>props.backColor};
color: ${(props)=>props.color};
border: 1px solid #900C3F;
font-Size: 20px;
width: 45px;
background-Color: '#900C3F';
`;

const Input = styled.input`
background-Color: #eec9d5;
color: #900C3F;
width: 45px;
border: 1px solid #900C3F;
font-Size: 20px;
`;

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        counter: this.props.init != null ? this.props.init : 1
    }

    increment = () => {
        let max=this.props.max != null ? this.props.max : 1000;
        console.log("max: "+max);
        this.state.counter < max ? this.setState({ counter: this.state.counter + 1 }) : this.setState({ counter: max });
    }
    decrement = () => {
        let init=this.props.init != null ? this.props.init : 1;
        this.state.counter > init ? this.setState({ counter: this.state.counter - 1 }) : this.setState({ counter: init });
    }
    handleChange = (event) => {
        event.target.value < 1 ? this.setState({ counter: 1 }) : (event.target.value > 1000 ? this.setState({ counter: 1000 }) : this.setState({ counter: parseInt(event.target.value) }));
    }

    render() {     
        const { counter } = this.state;
        return <div>
            <Button backColor="#ffffff" color="#900C3F" onClick={this.decrement}>-</Button>
            <Input type="text" value={counter} onClick={e => e.target.select()} onChange={this.handleChange}></Input>
            <Button backColor="#900C3F" color="#ffffff"  onClick={this.increment}>+</Button>
        </div>
    }
}

export default Counter;