import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('Abhisek');
  
  function changeName(){
    setName('Ashutosh')
  }

  return (
    <div className="App">
      Hello {name}
      <br />
      <button onClick = {changeName}>Change Name</button>
    </div>
  );
}

export default App;
