import './App.css';
import PageBody from './components/page_body/PageBody';
import Sidebar from './components/sidebar/Sidebar';
import { GlobalStateProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <GlobalStateProvider>
          <PageBody />
        </GlobalStateProvider>
      </div>
    </div>
  );
}

export default App;
