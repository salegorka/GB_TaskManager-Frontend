import React from 'react';
import ReactDOM from 'react-dom';
import nstyle from './normalize.scss';

//redux
import initStore from './store.js'
import { Provider } from 'react-redux';

import TestComp from './components/TestComp/testcomp.jsx';

ReactDOM.render (
   <Provider store = { initStore () }>
      <TestComp></TestComp>
   </Provider>,
   document.getElementById('root'),
)

