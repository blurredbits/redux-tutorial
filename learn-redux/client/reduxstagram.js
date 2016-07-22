import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

// Import components
import Main from './components/main';
import Single from './components/single';
import PhotoGrid from './components/photo-grid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

