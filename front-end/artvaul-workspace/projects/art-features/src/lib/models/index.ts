export interface Art {
  id: number;
  title: string;
  description: string;
  reference?: string;
  creationDate: Date;
  type: ArtType;
}

export type ArtType =
  | 'painting'
  | 'charcoal-drawing'
  | 'coloured-drawing'
  | 'pen-drawing'
  | 'music';

export type Arts = Art[];
