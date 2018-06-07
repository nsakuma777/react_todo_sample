import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ActionAndroid from "material-ui/svg-icons/content/create";

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.createTodo(
      this.refs.title.input.value,
      this.refs.desc.input.value
    );
  }

  render() {
    return (
      <React.Fragment>
        <TextField
          id="title_text"
          hintText="Todoのタイトルを入力して下さい"
          floatingLabelText="タイトル"
          ref="title"
        />
        <br />
        <TextField
          id="description_text"
          hintText="Todoの内容を入力して下さい"
          floatingLabelText="内容"
          ref="desc"
        />
        <br />
        <RaisedButton
          label="Todo作成"
          labelPosition="before"
          primary={true}
          onClick={this.handleClick}
          icon={<ActionAndroid />}
        />
      </React.Fragment>
    );
  }
}

export default Form;
