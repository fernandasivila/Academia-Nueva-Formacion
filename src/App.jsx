import { BrowserRouter } from 'react-router-dom';
import { InscriptionProvider } from './context/IncriptionContext';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './router/Router';

function App() {
  return (
    <InscriptionProvider>
      <BrowserRouter>
        <Navbar/>
        <Router />
      </BrowserRouter>
    </InscriptionProvider>
  );
}

export default App;
