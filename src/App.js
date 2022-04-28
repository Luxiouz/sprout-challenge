import './App.css';
import FlightPage from './components/FlightPage';
import FlightStopInfo from './components/FlightStopInfo';
import FlightState from './context/FlightState';
import Header from './components/shared/Header';

function App() {

  return (
    <div>
      <FlightState>
        <Header></Header>
        <FlightPage></FlightPage>
        <FlightStopInfo></FlightStopInfo>
      </FlightState>
    </div>
  );
}

export default App;
