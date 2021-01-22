import 'bootstrap/dist/css/bootstrap.css';
import Board from './components/Board';

const App = () => {
  return (
    <div className="text-center">
      <h1 className="bg-dark text-light py-2">To-Do Board</h1>
      <div className="mt-4">
        <Board />
      </div>
    </div>
  );
}

export default App;
