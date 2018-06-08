import React from 'react';
import Lifecycle from './Lifecycle';
import List from './components/List';

class App extends React.Component {
   constructor() {
      super();

    };

   render() {
      return (
         <div>
          <Lifecycle />
          <List />
         </div>
      );
   }
}


export default App;
