import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import Icons from './Icons';
import Query from './Query';

const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path='/' component={Query} />
          <Route exact path='/icons' component={Icons} />
        </Switch>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default App;
