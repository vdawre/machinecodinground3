import './App.css';
import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import SearchBar from './components/SearchBar';

function App() {
  const [db, setDb] = useState(data);
  
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <SearchBar data={db} />
    </div>
  );
}

export default App;
