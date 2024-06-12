import { Header } from '~widgets/site/header';

import { AppRouter } from './providers/router';

import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
