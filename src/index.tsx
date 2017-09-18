import './index.css';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { Provider } from 'react-redux';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore<StoreState>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  devToolsEnhancer({ name: 'react-starter' }),
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')!,
);
registerServiceWorker();
