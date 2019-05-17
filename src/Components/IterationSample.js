import React, { Component } from 'react';

/**
 * 6강 컴포넌트 반복
 */
class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name:'',
    }

    handleChange = (e) =>{
        this.setState({
            name : e.target.value,
        })
    } 
    handleInsert = () =>{
        this.setState({
            names: this.state.names.concat(this.state.name), 
            name:'',
        })
    }
    handleKeyPress = (e) =>{
        if(e.key==='Enter'){
            this.handleInsert();
        }
    }
    handleRemove = (idx) =>{
        const {names} = this.state;

        this.setState({
            // names:[
            //     ...names.slice(0, idx), 
            //     ...names.slice(idx+1, names.length)
            // ]

            names: names.filter((item, i)=> i!==idx)
        })
    } 
    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key ={index} onDoubleClick={() =>{this.handleRemove(index)}}>{name}</li>)
        )
        return (
            <div>
                <input
                    value = {this.state.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
            
        );
    }
}

export default IterationSample;