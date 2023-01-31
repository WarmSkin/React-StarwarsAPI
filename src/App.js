import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import StarshipsList from './components/StarshipsList/StarshipsList';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
				<Route path="/" element={<StarshipsList />} />
        <Route path="/starship" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
