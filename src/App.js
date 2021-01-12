import { useEffect } from 'react';
import { get_candidates } from './API/Apis';
import './App.css';
import Home from './Containers/Home/Home';

function App() {
  useEffect(() => {
    async function getData() {
      const data = await get_candidates('1673338454')
      console.log(data)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
