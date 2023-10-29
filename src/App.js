import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './Components/ReactRouter/MainRouter';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainRouter />
      </Layout>
    </div>
  );
}

export default App;