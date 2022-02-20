import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Sidebar, Header } from "./components";
import { Main } from "./pages";

function App() {
  return (
    <>
      <Header />
        <div className='flex'>
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
          <Sidebar />
        </div>
      </>
  );
}

export default App;
