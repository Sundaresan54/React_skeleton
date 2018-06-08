import React from 'react';
import ListItem from './Listitem';
class List extends React.Component {
  constructor() {
    super();
  }

  render(){
  let incredients = [{"id":1,"name":"pepper"},{"id":2,"name":"salt"}];
 let ListItems = incredients.map(function(item){
   return <ListItem id={item.id} incredients ={item.name} />
 });


    return(
      <div>
        <ul>{ListItems}</ul>
      </div>
    );
  }

}
export default List;
