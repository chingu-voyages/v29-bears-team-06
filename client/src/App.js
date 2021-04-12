import './App.css';

const Logo = () => (
  <div className="logo-container">
    <div className="logo"> flytrap </div>
    <div className="logo-subtitle">bug tracking made easy</div>
  </div>
)

const Card = () => { 
  return (
    <div className="card">
      <Input />
      <Input />
      <Button className="login" text="Log In" />
      <Button className="demo" text="Demo Account" />
    </div> 
  ) 
}

const Input = () => {
  return (
    <input type="text" / >
  )
}

const Button = ({ className, text }) => {
  return (
    <button className={className}>{text}</button>
  )
}

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Card />
    </div>
  );
}

export default App;
