import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
<>
    <Header/>
    <Outlet/>
</>
  )
}

export default App;
