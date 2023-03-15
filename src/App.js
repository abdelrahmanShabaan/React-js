import React, { Component } from 'react';
import Child from './child';
import Items from './component/Items';


class App extends Component {

 render(){ 
  return (
    <div className="App">

      <Items id="1" name = "ahmed" age = "22" />


    </div>
  );
} 

}
export default App;
