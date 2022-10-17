
import { Routes, Route } from 'react-router-dom';
import CombatPage from './routes/combat-page/combat-page.component';
import Navigation from './routes/navigation/navigation.component';
import InitiativeSetup from './routes/initiative-setup/initiative-setup.component';

  const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigation />} >
            <Route index element={<InitiativeSetup />} />
            <Route path='combatpage' element={<CombatPage/>} />
        </Route>
      </Routes>
    );
  };

export default App;
