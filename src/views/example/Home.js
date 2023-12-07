import React, { Component } from "react";
import Color from "../HOC/Color";

class Home extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <div>
                Hello wourld from Homepage
            </div>
        )
    }
}

export default Color(Home);