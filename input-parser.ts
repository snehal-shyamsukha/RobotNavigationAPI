import { Direction, Instruction, Plateau, Position } from './types';

export class InputParser {
    static parsePlateau(input: string): Plateau {
        const [width, height] = input.split(' ').map(Number);
        return { width, height };
    }

    static parsePosition(input: string): Position {
        const [x, y, direction] = input.split(' ');
        return { x: Number(x), y: Number(y), direction: direction as Direction };
    }

    static parseInstructions(input: string): Instruction[] {
        return input.split('') as Instruction[];
    }
}