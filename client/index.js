import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

const APP_STARTUP_TIME = 'app_startup_time';

console.time(APP_STARTUP_TIME);

const { API_URL } = process.env;

class App extends Component {
  state = { loaded: false };

  componentDidMount() {
    fetch(`${API_URL}/api/health`)
      .then((res) => res.json())
      .then(() => {
        this.setState({ loaded: true });
      })
      .catch((e) => {
        console.error(`Failed to load initial health check.`, e);
      });
  }

  render() {
    const { loaded } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                alignItems: 'center',
                fontFamily: 'Roboto',
              }}
            >
              <img
                alt="Beaver"
                style={{
                  height: '250px',
                }}
                src="https://pbs.twimg.com/profile_images/2779323089/f1d2488fedff90047a32244dbc624e59_400x400.jpeg"
              />
              <h2>Beaver</h2>
              <span
                style={{
                  color: loaded ? 'green' : 'gray',
                  fontSize: '0.8em',
                }}
              >
                {loaded ? 'Connected!' : 'Connecting to API...'}
              </span>
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'), () => {
  console.timeEnd(APP_STARTUP_TIME);
});
