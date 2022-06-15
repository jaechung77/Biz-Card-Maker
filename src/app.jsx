import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/components/login/login';
import styles from './app.module.css';
import Maker from '../src/components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
