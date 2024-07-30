export type PlayerCounter = {
   life: number;
   poison: number;
   energy: number;
   taxCommander: number;
   rad: number;
   monarch: boolean;
   citysBlessing: boolean;
   commanderDamage: CommanderDamage;
   death: boolean;
};

export type CommanderDamage = {
   playerIdenty: number;
   commanderIdenty: number;
   damage: number;
};

export type PlayerConfig = {
   bgImage?: string;
   bgColor?: string;
   playerIdenty: number;
};

export type Players = {
   counter: PlayerCounter;
   config: PlayerConfig;
};

export type MatchManager = {
   players: Players[];
   matchHash: string;

   updatePlayerConfig: (playerIdenty: number, config: PlayerConfig) => void;
   updatePlayerCounter: (playerIdenty: number, counter: PlayerCounter) => void;
   reset: () => void;
};
