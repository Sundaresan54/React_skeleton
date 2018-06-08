import React from 'react';
import List from './List';
class ListManager extends React.Component{
constructor(){
 super();
    this.state  = {items:[], newItemText:''};

}
onChange=(e)=>{
  this.setState({newItemText:e.target.value});
}
    handleSumbit=(e)=> {
      e.preventDefault();
      console.log("coming");
      let currentItems = this.state.items;
      console.log(this.state.items);
      currentItems.push(this.state.newItemText);
      console.log(currentItems,"aaa");
      this.setState({items:currentItems, newItemText:''});
        console.log(this.state.items);

   };

  render(){
    console.log(this.state.items,"qwett");
    console.log(this.state.new,"asdddddd");
    let item1=this.state.items;
    return(
      <div>
        
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSumbit}>
        <input  onChange = {this.onChange} value ={this.state.newItemText}/>
        <button>Add</button>
      </form>
      <List items={this.state.items} />

      </div>
    );

  }
}
export default ListManager;
