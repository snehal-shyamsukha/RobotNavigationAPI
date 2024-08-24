export type Direction = 'N' | 'E' | 'S' | 'W';
export type Instruction = 'L' | 'R' | 'M';

export interface Position {
    x: number;
    y: number;
    direction: Direction;
}

export interface Plateau {
    width: number;
    height: number;
}