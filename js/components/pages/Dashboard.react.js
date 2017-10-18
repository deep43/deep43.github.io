/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Planets} from './Planets.react'
import {SearchTextChanged} from '../../actions/AppActions';
import {Link} from 'react-router';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        //props.data = [];
    }

    render() {
        console.log(this.state);
        const planets = this.props.data.planets ? this.props.data.planets : [];

        return (
            <article>
                <section className="text-section">
                    <h1>Search Planets</h1>
                    <p>Welcome, you are logged in! </p>
                </section>
                <form className="form">
                    <div className="form__field-wrapper">
                        <input className="form__field-input" type="text" id="serach" value={this.props.data.searchtext}
                               placeholder="Search Planets" onChange={this._changeSearchText.bind(this)}
                               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                    </div>
                </form>
                {planets.map(planet =>
                    <a href={planet.url} target="_blank"> {planet.name}</a>
                )}
            </article>
        );
    }

    // Change the username in the app state
    _changeSearchText(evt) {
        this.props.dispatch(SearchTextChanged(evt.target.value));
    }
}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);
