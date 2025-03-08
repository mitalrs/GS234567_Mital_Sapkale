import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Store from '../Pages/Store';
import SKU from '../Pages/SKU';
import Planning from '../Pages/Planning';
import Charts from '../Pages/Charts';

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