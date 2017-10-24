import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <article>
        <div>
          <section className="text-section">

            <br/>
            <p>This application demonstrates a React.js with Redux and react-redux, react-router, middlewares etc.

              <br/><br/>We can use this as any project development with react redux. This will create initial project architecture setup.
              <br/><br/>The whole architecture setup is done for both development and production environment with the help of webpack.
              <br/><br/>For Demo - We can Manage courses, add a new course. Then Edit the existing courses.
            </p>

          </section>
        </div>
      </article>
    );
  }
}

export default HomePage;
