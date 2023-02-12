import React from "react";

class CheckAuthen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isLoggedIn: false,
        }
    }
    componentDidMount() {
        const getUserInfor = localStorage.getItem('isLoggedIn');
        let updateValue = this.state.isLoggedIn;
        if(getUserInfor) {
            updateValue = true;
        } else{
            updateValue = false;
        }
        this.setState({
            loading: false,
            isLoggedIn: updateValue
        })
    }
    render() {
        return (
            <div>
                {this.state.loading && <h3>Loading</h3>}
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Hello User</h3>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h3>Please login</h3>
                        <button>Login</button>
                    </div>
                )}
            </div>
        );
    }
}
export default CheckAuthen;