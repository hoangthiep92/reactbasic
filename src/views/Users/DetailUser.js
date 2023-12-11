import React from "react";
//khong dung thu vien nay nua roi nen khong the dung class de lam
// import { withRouter } from "react-router-dom";
import { useParams, Route } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = axios.get(`https://reqres.in/api/users/${id}`);
            console.log('>>> check res user: ', res);
        }
    }
    render() {
        console.log('>>> check props DetailUser: ', this.props);
        return (
            <div>
                Hello wourld from detail user with id:
            </div>
        )
    }
}

export default DetailUser;