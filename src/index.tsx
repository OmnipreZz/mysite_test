import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <div className="AppWrapper">
      <App />
    </div> 
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
