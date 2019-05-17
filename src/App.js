import React, {Component} from 'react';
import EventPractice from './Components/EventPractice';
import ValidationSample from './Components/ValidationSample';
import ScrollBox from './Components/ScrollBox';
import IterationSample from './Components/IterationSample';
import LifeCycleSample from './Components/LifeCycleSample';
import LifeCycleSampleParent from './Components/LifeCycleSampleParent';

function getRandomcolor() {
  return '#' +Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state={
    color: '#000000'
  }
  
  handleClick = () =>{
    this.setState({
      color: getRandomcolor()
    })
  }
  render(){
    return (
      /*4장 이벤트핸들링 */
      // <EventPractice/> 
      
      /*5장 ref: DOM에 이름달기(1) */
      // <ValidationSample/>
      
      /*5강 ref: DOM에 이름달기(2) */
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      // </div>
      
      /*6강 컴포넌트 반복 */
      // <IterationSample/>
      
      /*7강 컴포넌트의 라이프 사이클 메서드 */
      <LifeCycleSampleParent/>
    );
  }
  
}

export default App;
