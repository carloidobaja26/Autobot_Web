import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from '../components/nav/Nav';
import FrontTrading from '../components/front-trading/Front-Trading';
import Dashboard from '../components/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Nav/>
      <FrontTrading/>
    </div>
  );
}

export default App;
