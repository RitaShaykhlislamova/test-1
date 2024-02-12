import React from "react";

class Test extends React.Component {

    render() {
        return(
            <div>
                <h1>
                {this.props.firstName + ' ' + this.props.secondName}
                </h1>
                {
                    this.props.fun1()
                }
            </div>
        )
    }
}
 export default Test;
