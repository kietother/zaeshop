import React from 'react';
import AppRoute from './routes/AppRoute';
import { store } from './store/index';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;