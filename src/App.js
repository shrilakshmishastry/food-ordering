import Header from './component/header';
import Content from './component/Content';
import { BrowserRouter } from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ReduxProvider store={store}>
       <BrowserRouter>
      <main className="App">
        <Header />
        <Content />
      </main>
    </BrowserRouter>
    </ReduxProvider>

  );
}

export default App;
