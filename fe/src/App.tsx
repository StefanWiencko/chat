import { Routes, Route } from "react-router-dom";
import React from "react";

const Index = React.lazy(() => import("@/modules/index/Index"));

const App = () => (
  <Routes>
    <Route
      index
      element={
        <React.Suspense fallback={<div>...</div>}>
          <Index />
        </React.Suspense>
      }
    />
  </Routes>
);

export default App;
