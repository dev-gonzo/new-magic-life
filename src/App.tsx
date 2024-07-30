import { useMatchManager } from "./storage/useMatchManager";

function App() {
   const { matchHash } = useMatchManager();
   return (
      <div>
         <h1 className="font-audiowide h-1 text-red-900">{matchHash}</h1>
 
      </div>
   );
}

export default App;
