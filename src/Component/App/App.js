import Clock from '../Clock/Clock';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ExampleError from '../ExampleError/ExampleError';
import './App.css';

function App() {
  return (
    <div className="App">

      <Clock/>
      
      <ErrorBoundary>
        <ExampleError/>
      </ErrorBoundary>

    </div>
  );
}

export default App;