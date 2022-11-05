import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/Hooks/useTelegram';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])

  

  return (
    <div className="App">
      <button onCLick={onToggleButton}>toggle</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
