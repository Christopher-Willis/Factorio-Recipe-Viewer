import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let fileReader

  const handelFileRead = (e) => {
    const content = fileReader.result
    let json = JSON.parse(content);
    for (const [key, value] of Object.entries(json)) {
      console.log(`${key}`);
    }
  }

  const hadleFileChosen = (file) => {
    if(!file){
      return 
    }
    fileReader = new FileReader();
    fileReader.onloadend = handelFileRead;
    fileReader.readAsText(file)
  }

  return (
    <div className="App">
      <input type='file'
        id='file'
        className='input-file'
        accept='.json'
        onChange = {e=> hadleFileChosen(e.target.files[0])}
      />
    </div>
  );
}

export default App;
