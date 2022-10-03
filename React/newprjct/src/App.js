 
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile'; 
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEv from './components/ClassEv';
function App() {
  
  return (
    <div className="App">       
      {/* <Hello name='www'></Hello> */}
      {/* <Message prpomess='Sommessage'></Message> */}
      {/* <Profile name='name' sorname='sorname'>
        <p>This is a message.</p>
      </Profile> */}
      <Counter></Counter>
      {/* <Resume name='Some name'></Resume>*/} 
      {/* <FunctionEvent ></FunctionEvent> */}
      {/* <ClassEv></ClassEv> */}
    </div>
  );
}

export default App;
