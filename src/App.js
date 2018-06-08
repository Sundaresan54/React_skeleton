import React from 'react';
import Lifecycle from './Lifecycle';
import ListManager from './components/ListManager';

class App extends React.Component {

   render() {
      return (
         <div>
          <Lifecycle />
          <ListManager title="Incredients" />
         </div>
      );
   }
}


export default App;
