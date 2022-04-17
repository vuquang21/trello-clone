import './App.scss';
import Column from './components/Column';

function App() {
  return (
    <div className="trello-lemondev-master">
      <nav className='navbar app'>App Bar</nav>
      <nav className='navbar board'>Board Bar</nav>
      <div className='board-columns'>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
}

export default App;
