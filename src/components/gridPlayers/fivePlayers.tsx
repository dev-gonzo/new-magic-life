import React, { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { IndividualPlayer } from './individualPlayer';

export const FivePlayers: React.FC = () => {
   const col3Ref = useRef<HTMLDivElement | null>(null);
   const item1Ref = useRef<HTMLDivElement | null>(null);

   const updateItemDimensions = () => {
      if (col3Ref.current && item1Ref.current) {
         const col3Height = col3Ref.current.clientHeight;
         const col3Width = col3Ref.current.clientWidth;

         item1Ref.current.style.height = `${col3Width}px`;
         item1Ref.current.style.width = `${col3Height}px`;
      }
   };

   useEffect(() => {
      updateItemDimensions();
      window.addEventListener('resize', updateItemDimensions);
      return () => {
         window.removeEventListener('resize', updateItemDimensions);
      };
   }, []);

   return (
      <div className="grid grid-cols-3 h-screen">
         <div className="flex flex-col justify-center items-center h-full">
            <div className="rotate-180 w-full h-1/2">
               <IndividualPlayer />
            </div>
            <div className="w-full h-1/2 ">
               <IndividualPlayer />
            </div>
         </div>
         <div className="flex flex-col justify-center items-center">
            <div className="rotate-180 w-full h-1/2">
               <IndividualPlayer />
            </div>
            <div className="w-full h-1/2">
               <IndividualPlayer />
            </div>
         </div>
         {isMobile ? (
            <div
               className="flex items-center justify-center"
               id="col-3"
               ref={col3Ref}
            >
               <div
                  className="rotate-[270deg] w-full h-full"
                  id="item-1"
                  ref={item1Ref}
               >
                  <IndividualPlayer />
               </div>
            </div>
         ) : (
            <div className="flex flex-col justify-center items-center">
               <div className="w-full h-1/2">
                  <IndividualPlayer />
               </div>
            </div>
         )}
      </div>
   );
};
