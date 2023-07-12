import React from 'react';
import '../styles/App.css';
import NewApplication from '../components/NewApplication/NewApplication';
import PassportPhotos from '../components/PassportPhotos/PassportPhotos';
import Header from '../components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <NewApplication /> */}
      <Header />
      <PassportPhotos />
    </div>
  );
}

export default App;
