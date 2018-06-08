import React from 'react';
import ListItem from './Listitem';
import ListManager from './ListManager';

class List extends React.Component {
constructor(){
  super();
  this.state={title:"Incredients"}
}

  render() {
    console.log(this.props.items,"hiuyi");
    let createItems='';

 let createItem = (text,index)=>{
console.log(text,'text123');
console.log(index,'index1234');
   return <ListItem key={index+text} text ={text} />;};
   if(this.props.items){
     console.log(this.props.items,"comingeeee");
      createItems=this.props.items.map(createItem);

console.log(createItem,"bee");
 };


    return(
      <div>
        <ul>
      {createItems}
</ul>
      </div>
    );
  }

}
export default List;
