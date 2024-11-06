import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function AppRoutes() { // Renomeie a função para evitar conflito com o componente Routes importado
  return (
    // Garante que seja renderizada apenas uma rota por vez
    <Routes>
      <Route path="/" element={<Login />} /> {/* Use 'element' ao invés de 'component' */}
      {/* 
        <Route path="/new" element={<NewContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      */}
    </Routes>
  );
}
