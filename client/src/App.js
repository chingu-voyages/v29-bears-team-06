import './App.scss';
import Card from './Card';

const Logo = () => (
  <div className="logo-container">
    <div className="logo"> flytrap </div>
  </div>
)

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Card />
    </div>
  );
}

export default App;
