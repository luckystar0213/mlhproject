import React, { Fragment } from "react";
import Input from "./components/input"
import List from "./components/list"
import Resive from "./components/resive"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: true
        }
    }
    render() {
        return (
            <Fragment>
                {this.state.flag ? <Input /> : <Resive handleToggle={this.handleToggle.bind(this)} />}
                <hr />
                <List handleToggle={this.handleToggle.bind(this)} />
            </Fragment>
        )

    }
    handleToggle(flag) {
        this.setState({
            flag
        })
    }
}
export default App