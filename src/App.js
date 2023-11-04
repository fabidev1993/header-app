import React from 'react'; // Must be imported for webpack to work
import './App.css';
const Reza = React.lazy(()=> import('HomeApp/Reza'))

function App() {
  return (
      <div className="HeaderApp">
        <div>Header</div>
          <React.Suspense fallback={<div>Loading Reza...</div>}>
              <Reza />
          </React.Suspense>
      </div>
  );
}

export default App;