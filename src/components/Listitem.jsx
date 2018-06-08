import React from 'react';

class ListItem extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div className="ListItem">
        <li>
          <h4>{this.props.id}
            {this.props.incredients} </h4>
        </li>
      </div>
    );
  }

}
export default ListItem;
