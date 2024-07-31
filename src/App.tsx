import { GridPlayers } from './components/gridPlayers';
import { useMatchManager } from './storage/useMatchManager';

function App() {
   const { matchHash } = useMatchManager();
   return (
      <>
         {/* <h1 className="font-audiowide h-1 text-red-900">{matchHash}</h1> */}
         <GridPlayers />
      </>
   );
}

export default App;
