import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSumit = (event) => {
        // khong load lai trang khi Sumit
        event.preventDefault()
        // bao loi khi khong nhap input
        if (!this.state.title || !this.state.salary) {
            alert('Missing repuied params')
            return;
        }
        // kiem tra state da nhap
        console.log('input date: ', this.state)
        // lay funcion tu Cha xuong qua props
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label>
                <br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <br />
                <input type="button"
                    value="Submit"
                    onClick={(event) => this.handleSumit(event)}
                />
            </form>
        )
    }


}

export default AddComponent;