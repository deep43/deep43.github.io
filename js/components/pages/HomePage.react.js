/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
        props.data.loggedIn = false;
    }

    render() {
        const dispatch = this.props.dispatch;
        const {loggedIn} = this.props.data;

        return (
            <article>
                <div>
                    <section className="text-section">
                        {/* Change the copy based on the authentication status */}
                        {loggedIn ? (
                            <h1>Welcome to Login Flow, you are logged in!</h1>
                        ) : (
                            <h1>Welcome to Login Flow!</h1>
                        )}
                        <p>This application demonstrates a React.js with login and search functionality with <a
                            href="https://swapi.co/">swapi.co</a> api</p>

                    </section>
                </div>
            </article>
        );
    }
}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
