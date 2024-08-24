import { Robot } from './robot';
import { Instruction, Plateau, Position } from './types';

export class MissionControl {
    private plateau: Plateau;
    private robots: Robot[] = [];

    constructor(plateau: Plateau) {
        this.plateau = plateau;
    }

    addRobot(initialPosition: Position): void {
        const robot = new Robot(initialPosition);
        this.robots.push(robot);
    }

    executeInstructions(robotIndex: number, instructions: Instruction[]): string {
        const robot = this.robots[robotIndex];
        let reachedBoundary = false;
        let finalMessage = '';

        for (const instruction of instructions) {
            const oldPosition = robot.getPosition();
            robot.executeInstruction(instruction);
            const newPosition = robot.getPosition();
            
            if (this.isOutOfBounds(newPosition)) {
                robot.setPosition(oldPosition);
                reachedBoundary = true;
                finalMessage = `Robot ${robotIndex + 1} reached the boundary at position ${this.getRobotPositionString(robot)}`;
                break;
            }
        }

        if (!reachedBoundary) {
            finalMessage = `Robot ${robotIndex + 1} final position: ${this.getRobotPositionString(robot)}`;
        }

        return finalMessage;
    }

    private isOutOfBounds(position: Position): boolean {
        return position.x < 0 || position.x > this.plateau.width ||
               position.y < 0 || position.y > this.plateau.height;
    }

    private getRobotPositionString(robot: Robot): string {
        const position = robot.getPosition();
        return `${position.x} ${position.y} ${position.direction}`;
    }

    getRobotPositions(): Position[] {
        return this.robots.map(robot => robot.getPosition());
    }
}