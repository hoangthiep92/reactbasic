import React from "react";
import { toast } from 'react-toastify';



class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        //tranh truong hop gui du lieu rong
        if (!this.state.title) {
            toast.warning('Missing title')
            //thoat khoi handle
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnchangetitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }

}

export default AddTodo;