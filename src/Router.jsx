import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Reservas } from './pages/Reservas';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}
