import React, {Component} from 'react';
import {Link} from 'react-router';

class Planets extends Component {
    render() {
        console.log(this.props.planets);
        return (
            <article>
                {this.props.planets.map(planet =>
                    <Link to="\" planet={planet}/>
                )}
            </article>
        );
    }
}

export default Planets;
