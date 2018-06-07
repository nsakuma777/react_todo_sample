
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

class Clear extends React.Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clearTodo();
  }

  render() {
    return (
      <React.Fragment>
        <RaisedButton
          label="すべて削除"
          labelPosition="before"
          secondary={true}
          onClick={this.handleClick}
          icon={<ClearIcon />}
        />
      </ React.Fragment>

    )
  }
}

export default Clear;