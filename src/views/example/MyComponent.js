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
    // comment cac viet de hieu va hien cach viet nang cao
    // let currenJobs = this.state.arrJobs;
    // currenJobs.push(job)

    this.setState({
      arrJobs: [...this.state.arrJobs, job]
      // arrJobs: currenJobs
    })
  }

  deleteAJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter(item => item.id !== job.id)
    this.setState({
      arrJobs: currenJobs
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>> run did update',
      'prev state: ', prevState,
      ' current state: ', this.state);
  }
  componentDidMount() {
    console.log('>>> run component did mount');
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
          deleteAJob={this.deleteAJob}
        />
      </>
    )
  }
}

export default MyComponent;
