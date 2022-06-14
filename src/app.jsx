import './app.css';
import Login from '../src/components/login/login';

function App({ authService }) {
  console.log(process.env);
  return <Login authService={authService} />;
}

export default App;
