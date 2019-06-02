import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            formOpen: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    showForm() {
        if (this.state.formOpen) {
            this.setState({formOpen: false});
        } else {
            this.setState({formOpen: true});
        }
    }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login({email: this.state.email, password: this.state.password});
        
        this.props.history.push('/signup');
    }

    handleSubmit2(e) {
        e.preventDefault();
        this.props.login({ email: 'placeholder@gmail.com', password: 'password123' });
    }

    transition() {
        const dd = document.getElementById("dropdown");
        dd.classList.toggle('open');
        // if (dd.classList.contains('open')) {
        //     dd.classList.add('closed');
        //     dd.classList.remove('open');
        // } else {
        //     dd.classList.add('open');
        //     dd.classList.remove('closed');
        // }
    }

    render() {
        // let dropdownForm;
        // if (this.state.formOpen) {
        //     dropdownForm = (
        //         <div id="login-form" className="login-form">
        //             <form onSubmit={this.handleSubmit}>
        //                 <input type="text" value={this.state.email} onChange={this.change("email")} placeholder="Email address" />
        //                 <br/>
        //                 <input type="password" value={this.state.password} onChange={this.change("password")} placeholder="Password" />
        //                 <br/>
        //                 <input className="dropdown-login-btn" type="submit" value="Log in to Splitwise" />
        //             </form>
        //             <form onSubmit={this.handleSubmit2}>
        //                 <input className="dropdown-demo-login-btn" type="submit" value="Demo Login" />
        //             </form>
        //                 <span className="forgot-password">Forgot your password? <a href="#">Click here</a></span>
        //         </div>
        //     );
        // } else {
        //     dropdownForm = null;
        // }
       
        return (
            <div>
                <button onClick={this.transition} className="header-login-btn">Log in</button>
                <div id="dropdown">
                    <div id="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.email} onChange={this.change("email")} placeholder="Email address" />
                            <br />
                            <input type="password" value={this.state.password} onChange={this.change("password")} placeholder="Password" />
                            <br />
                            <input className="dropdown-login-btn" type="submit" value="Log in to Splitwise" />
                        </form>
                        <form onSubmit={this.handleSubmit2}>
                            <input className="dropdown-demo-login-btn" type="submit" value="Demo Login" />
                        </form>
                        <span className="forgot-password">Forgot your password? <a href="#">Click here</a></span>
                    </div>
                </div>
                {/* <button onClick={this.showForm} className="header-login-btn">Log in</button> */}
                {/* {dropdownForm} */}
            </div>
        );
    }
}

export default withRouter(LoginForm);