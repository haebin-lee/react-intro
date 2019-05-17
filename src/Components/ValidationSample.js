import React, { Component } from 'react';
import '../css/ValidationSample.css'

/**
 * 5강 ref: DOM에 이름달기
 */
class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false, 
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true, 
            validated: this.state.password==='0000'
            //validated: !this.state.validated
        })
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref)=> this.input = ref}
                    type="password"
                    value= {this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked? (this.state.validated? 'success':'failure'): ''}
                    />
                    <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;