import React, { useState, useEffect, Suspense } from "react";
//** Gaurav Side Code */
// ** Router Import
import Router from "./router/Router";

// ** Routes & Default Routes
import { getRoutes } from "./router/routes";

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";
import axios from "axios";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);

  // ** Hooks
  const { layout } = useLayout();

  useEffect(() => {
    setAllRoutes(getRoutes(layout));
  }, [layout]);
  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  );
};

export default App;


