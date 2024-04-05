
import { useState } from 'react';
import './App.css';
// import About from './components /About';
import Navbar from './components /Navbar';
import Textform from './components /Textform';
import Alert from './components /Alert';

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#062d54'
      showAlert("Dark mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enabled", "success")
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div >
      <Navbar title="TextUtils" about="About Us" mode={ mode } toggleMode={ toggleMode } />
      <Alert alert={ alert } />

      <div className='container my-3'>
        <Textform heading="Enter your text to work" mode={ mode } showAlert={ showAlert } />
        {/* <About /> */ }
      </div>

    </div>
  );
}

export default App;
