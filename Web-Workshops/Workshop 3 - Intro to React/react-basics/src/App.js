/*IMPORTANT : we can only return one element */
import './App.css'

import HelloWorld from './components/HelloWorld';
import List from './components/List'
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <List />
    </div>
  );
}

export default App;
