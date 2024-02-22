import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderNav } from './components/HeaderNav';
import FooterPages from './components/FooterPages'

function App() {
  return (
    <div className="App">
      <div className='HeaderNav'>{/* div para trabajo de juan pablo*/}
        <HeaderNav />



      </div>
      <div>{/* div para trabajo de Juliana */}



      </div>
      <div className='FooterPages'>{/* div para trabajo de Kevin */}
        <FooterPages/>

      </div>
    </div>
  );
}

export default App;
