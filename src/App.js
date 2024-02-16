import { useEffect, useState } from 'react';
import './App.css';
import HelloWorld from './adobe/adobe';
import FastSpin from './fastspin/fastspin';

function App() {

  const [a, setA] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setA(true);
    }, 4000);
  }, []);

  

  return (
    <main className='bulk'>    

      { !a ? 
        <FastSpin />

        :

        <HelloWorld />
      }


    </main>
  );
}

export default App;
