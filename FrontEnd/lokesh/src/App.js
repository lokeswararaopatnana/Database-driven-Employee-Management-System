
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import AddEmployee from './Components/AddEmployee';
import EditEmloyee from './Components/EditEmloyee';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddEmployee/>} />
        <Route path='/edit' element={<EditEmloyee/>} />
        {/* <Route path='/search' element={<SearchbyEmpId/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
