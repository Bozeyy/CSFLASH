export type UtilityType = 'smoke' | 'flash' | 'molo';

export interface Position {
  x: number;
  y: number;
}

export interface Utility {
  type: UtilityType;
  position: Position;
  positions: Position[];  // Liste des positions où l'utilitaire peut être lancé
  description?: string;
}

export interface MapData {
  name: string;
  minimapUrl: string;
  utilities: Utility[];
} 