import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';




class ListTodo extends React.Component {

    state = {
        ListTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success("Success!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos;
        //filter giup loc du lieu
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListTodos: currentTodos
        })
        toast.success('Delete succes!')
    }
    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (!isEmptyObj && editTodo.id === todo.id) {
            let ListTodoscopy = [...ListTodos];
            // tim index qua item.id
            let objIndex = ListTodoscopy.findIndex((item => item.id === todo.id))
            //thay doi title
            ListTodoscopy[objIndex].title = editTodo.title;
            this.setState({
                ListTodos: ListTodoscopy,
                editTodo: {}
            })
            toast.success('Update todo succeed')
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check editTodo: ', isEmptyObj);
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {/* dieu kien de liet ke list */}
                    {ListTodos && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id} >
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} -
                                                    <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span> {index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {!isEmptyObj && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        )
    }

}

export default ListTodo;