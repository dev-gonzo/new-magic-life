import { IndividualPlayer } from './individualPlayer';

export const ThreePlayers = () => {
   return (
      <div className="flex flex-wrap h-screen">
         <div className="w-1/3">
            <IndividualPlayer />
         </div>
         <div className="w-1/3">
            <IndividualPlayer />
         </div>
         <div className="w-1/3">
            <IndividualPlayer />
         </div>
    
      </div>
   );
};
