import PetPic from './components/petpic';
import NavBar from './components/navbar';
import OldPet from './components/oldpet';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <OldPet/>
        <PetPic/>
    </div>
  );
}

export default App;