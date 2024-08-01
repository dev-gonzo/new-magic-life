import { Counter } from '../counter';
import { BtnMinus, BtnPlus } from '../icons';
import { usePoisonMarker } from './hook/usePoisonMarker';


export const PoisonMarker = () => {
   const { poison, handleAddPoison, handleSubPoison } = usePoisonMarker();
   return (
      <>
         <div className="flex justify-center items-center gap-2">
            <button onClick={handleSubPoison}>
               <BtnMinus/>
            </button>
            <Counter value={poison} />
            <button onClick={handleAddPoison}>
               <BtnPlus />
            </button>
         </div>
      </>
   );
};
