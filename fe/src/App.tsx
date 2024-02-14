import { Routes, Route } from "react-router-dom";
import React from "react";
import Spinner from "@/modules/shared/Spinner";

const Index = React.lazy(() => import("@/modules/index/Index"));
const Chat = React.lazy(() => import("@/modules/chat/Chat"));

const App = () => (
  <div className="h-screen bg-gradient-to-r from-MAIN-pink to-MAIN-azure">
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<Spinner />}>
            <Index />
          </React.Suspense>
        }
      />
      <Route
        path="/chat"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Chat />
          </React.Suspense>
        }
      />
    </Routes>
  </div>
);

export default App;
