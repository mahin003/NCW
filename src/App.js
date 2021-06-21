import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './Components/WrestlersCard/Card'
import Header from './Components/Header/Header'
function App() {

  return (
    <div className="App">     
      <Header></Header>
      <Card></Card>
      
    </div>
  );
}

export default App;
