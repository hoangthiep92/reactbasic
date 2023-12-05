import React from "react"
import ChildComponent from "./ChildComponent"
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {
  // bien state key:value
  state = {

    arrJobs: [
      { id: 'job1', title: 'Developers', salary: '500' },
      { id: 'job2', title: 'Tester', salary: '400' },
      { id: 'job3', title: 'Project managers', salary: '1000' }
    ]
  }

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }




  /*
  JSX return block
   */
  render() {
    console.log('>>> call render: ', this.state)
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />



        <ChildComponent
          arrJobs={this.state.arrJobs}
        />
      </>
    )
  }
}

export default MyComponent;
