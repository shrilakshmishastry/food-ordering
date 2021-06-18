import Header from './component/header';
import Content from './component/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <Content />
      </main>
    </BrowserRouter>
  );
}

export default App;
