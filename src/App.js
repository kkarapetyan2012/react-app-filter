import React, { useContext } from 'react';
import {storeContext} from './store';
import Search from './components/Search/Search';
import List from './components/List/List';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [store,MySearch] = useContext(storeContext);
  return (
    <div className="App">
      <Search />
      {store && store.map(data=><List data={data} key={data.id} />)}
    </div>
  );
}

export default App;
