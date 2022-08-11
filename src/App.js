import logo from './logo.svg';
import './App.css';

import Footer from './component/Footer.js';

function moreInfo() {
  return window.alert('For more info, call 1-800-CATSROK')
}

function App() {
  return (
    <div className='App'>
      <h1 style={{fontSize:'52px'}}> Cats R us </h1>
      <img className='img' alt='Very many cats' src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'/>
      <p style={{fontSize:'20px'}}>Cats R Us are all about or fluffy feline friends - the cat ...</p>
      <button onClick={moreInfo} className='button'>Click For More Info</button>
      <br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
