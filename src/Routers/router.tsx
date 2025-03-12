import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Store from '../Pages/Store/Store';
import SKU from '../Pages/Sku/SKU';
import Planning from '../Pages/Planning/Planning';
import Charts from '../Pages/Charts/Charts';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={< Store />} />
      <Route path="/sku" element={< SKU />} />
      <Route path="/planning" element={< Planning />} />
      <Route path="/charts" element={< Charts />} />
    </Routes>
  );
};

export default AppRoutes;