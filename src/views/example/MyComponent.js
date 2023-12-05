import React from "react";

class MyComponent extends React.Component {

// bien state key:value
state = {
    name: 'Thiep',
    channel: 'Hoi dan IT'
}


/*
JSX return block
 */

// vi du co ban khi su dung DOM
handleClickButton = () => {
    alert('click me')
}
handleOnChangeName = (event) => {
    //kiem tra cac gia trij event
    // console.log(event.target.value, 
    //     'event target: ',
    //     event.target,
    //     'event object: ',
    //     event)
        this.setState({
            name: event.target.value
        })
}

    render() {

        return (
            // <div className="abc">
            //     <div className="firstClass">
            //     {console.log('My name is:', name)}
            // hello my component, My name is {name}
            //     </div>

            //     <div className="secondCalss">
            //         block nho ban trong
            //     </div>
            // </div>
            // <React.Fragment> // khi muon return nhieu block
            //     <div className="firstClass">
            //         {console.log('My name is:', name)}
            //         hello my component, My name is {name}
            //     </div>

            //     <div className="secondCalss">
            //         block nho ban trong
            //     </div>
            // </React.Fragment>

            // cach 2 khi muon dung Fragment
            <> 
            <div className="firstClass">
                    {console.log('My name is:', this.state.name)}
                    <input onChange={(event) => this.handleOnChangeName(event)} 
                    type="text" 
                    value={this.state.name}/>
                    hello my component, My name is {this.state.name}
                </div>

                <div className="secondCalss">
                    {/* block nho ban trong */}
                    My channel: {this.state.channel}
                </div>

                <div className="third">
                    <button onClick={() => this.handleClickButton()}>click me</button>
                </div>

            </>
        )

    }
}

export default MyComponent;