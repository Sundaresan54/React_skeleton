import React from 'react';

class ListItem extends React.Component {

  render(){
    console.log(this.props.items,"propscoming");
    return(
      <div className="ListItem">
        <li>
          <h4>
            {this.props.text} </h4>
        </li>
      </div>
    );
  }

}
export default ListItem;
