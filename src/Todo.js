import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import FlatButton from "material-ui/FlatButton";
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(todo) {
    console.log(todo);
    this.props.compTodo(todo);
  }

  render() {
    console.log(this.props)
    return (
      <ListItem>
      {this.props.todo.title}
        <FlatButton
          label="complete"
          primary={true}
          onClick={() => this.handleClick(this.props.todo)}
          disabled={this.props.todo.done}
        />
      </ListItem>
    );
  }
}

export default Todo;
