import { create } from 'zustand';
import { MatchManager } from '../@types';

export const useMatchManager = create<MatchManager>()((set) => ({
   players: [],
   matchHash: '51cf2ed5cd8abeb4c27012bc39c7d4eb',

   reset: () =>
      set(() => ({
         players: [],
      })),

   updatePlayerConfig: () =>
      set(() => ({
         players: [],
      })),

   updatePlayerCounter: () =>
      set(() => ({
         players: [],
      })),
}));
