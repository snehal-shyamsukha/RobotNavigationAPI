import { Direction, Instruction, Position } from './types';

export class Robot {
    private position: Position;

    constructor(initialPosition: Position) {
        this.position = { ...initialPosition };
    }

    private turn(turnDirection: 'L' | 'R'): void {
        const directions: Direction[] = ['N', 'E', 'S', 'W'];
        const currentIndex = directions.indexOf(this.position.direction);
        const newIndex = (currentIndex + (turnDirection === 'L' ? 3 : 1)) % 4;
        this.position.direction = directions[newIndex];
    }

    private move(): void {
        switch (this.position.direction) {
            case 'N': this.position.y++; break;
            case 'E': this.position.x++; break;
            case 'S': this.position.y--; break;
            case 'W': this.position.x--; break;
        }
    }

    executeInstruction(instruction: Instruction): void {
        if (instruction === 'M') {
            this.move();
        } else {
            this.turn(instruction);
        }
    }

    getPosition(): Position {
        return { ...this.position };
    }

    setPosition(position: Position): void {
        this.position = { ...position };
    }
}