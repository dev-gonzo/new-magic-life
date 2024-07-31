import { IndividualPlayer } from './individualPlayer';

export const FourPlayers = () => {
   return (
      <div className="flex flex-wrap h-screen">
         <div className="w-1/2 rotate-180">
            <IndividualPlayer />
         </div>
         <div className="w-1/2 rotate-180">
            <IndividualPlayer />
         </div>
         <div className="w-1/2 rotate-180">
            <IndividualPlayer />
         </div>
         <div className="w-1/2">
            <IndividualPlayer />
         </div>
      </div>
   );
};
