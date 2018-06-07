import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Todo from './Todo';
import { List } from 'material-ui/List';


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TodoList extends React.Component{
  constructor(props) {
    super(props)
    console.log(props);
  }


  render() {
    const todo = this.props.todos.map(todo =>(
      <List>
        <Todo todo={todo} compTodo={this.props.compTodo} />
      </List>
    ));

    return (todo)
  }
} 


export default TodoList;
