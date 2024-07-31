import { useLayoutEffect, useRef, useState } from 'react';
import { IndividualPlayer } from './individualPlayer';

export const TwoPlayers = () => {
   const refTwo = useRef<HTMLDivElement>(null);
   const [width, setWidth] = useState<number | undefined>(undefined);
   const [height, setHeight] = useState<number | undefined>(undefined);

   useLayoutEffect(() => {
      if (refTwo.current) {
         setWidth(refTwo.current.offsetWidth);
         setHeight(refTwo.current.offsetHeight);
      }
   }, [refTwo]);

   useLayoutEffect(() => {
      const handleResize = () => {
         if (refTwo.current) {
            setWidth(refTwo.current.offsetWidth);
            setHeight(refTwo.current.offsetHeight);
         }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <div className="flex w-full h-screen p-2 gap-2">
         <div className="relative w-[calc(50%-40px)] flex items-center justify-center">
            <div
               className={`absolute w-[${height}px] h-[${width}px rounded-md overflow-hidden rotate-90`}
            >
               <IndividualPlayer />
            </div>
         </div>

         <div
            ref={refTwo}
            className="relative w-[calc(50%-40px)] flex items-center justify-center"
         >
            <div
               className={`absolute w-[${height}px] h-[${width}pxrounded-md overflow-hidden rotate-[270deg]`}
            >
               <IndividualPlayer />
            </div>
         </div>
      </div>
   );
};
