import { useEffect } from 'react';
import './App.css';
import Water from './components/Water';
function App() {
  const msg = new SpeechSynthesisUtterance()
  useEffect(()=>{
   
    window.speechSynthesis.speak(msg)
  })
  return (
    <>
      {/* <Home></Home> */}
      <Water></Water>
    </>
  );
}

export default App;


