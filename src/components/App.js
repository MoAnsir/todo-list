import React from 'react';

//Presentation components
const Title = (props) => {
	return(
		<header className="col-sm-12">
			<h1 className="text-center">React To-Do list {props.name}</h1>
		</header>
	)
}

const IntroText = (props) => {
	return(
		<section className="col-sm-12">
			<p className="lead text-center">This is a To-Do application built with React, Webpack, Bootstrap and fontawesome {props.name}</p>
		</section>
	)
}



const TodoForm = ({addTodo}) => {
	let input;

	return(
		<section className="col-sm-12 text-center input-todo">
			<input ref={node => {input = node;}} /> 
			<i onClick={() => {addTodo(input.value); input.value = '';}} className="fa fa-plus" aria-hidden="true"></i>
		</section>
	)
}
const Todo = ({todo, remove}) => {
	return (<li className='lead'>{todo.text}<i onClick={() =>{remove(todo.id)}} className="fa fa-minus" aria-hidden="true"></i></li>);
	
}
const TodoList = ({todos, remove}) => {
	//console.log('todos', todos);
	//console.log('remove', remove);
	const todoNode = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove} />)
	});
	return (<ul className="col-sm-12 text-left todo-list">{todoNode}</ul>);
}


//Container Component
window.id = 0;
export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 999,
					text: 'placeholder',
					priority: 999
				}
			]
		}
	}
	addTodo(val){
		const todo = {text: val, id: window.id++}
		console.log('value', todo);
		if(!todo.text == ''){
			this.state.data.push(todo);
			this.setState({data: this.state.data});
		}
	}
	handleRemove(id){
		const remainder = this.state.data.filter((todo) => {
			if(todo.id !== id) return todo;
		});
		this.setState({data: remainder});
	}
	render() {
		return(
			<div>
				<div className="row">
					<Title name='Lenny' />
				</div>
				<div className="row">
					<IntroText name='Ansir' />
				</div>
				<div className="row">
					<TodoForm addTodo={this.addTodo.bind(this)}/>
					<TodoList todos={this.state.data} remove={this.handleRemove.bind(this)} />
				</div>
			</div>
		);
	}
}







//What are refs
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    console.log('textInput', this.textInput);
    console.log('focus', this.focus);
    console.log('ref', this.refs);
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={(input) => { this.textInput = input; }} />
        <input type="button" value="Focus the text input" onClick={this.focus} />
      </div>
    );
  }
}
