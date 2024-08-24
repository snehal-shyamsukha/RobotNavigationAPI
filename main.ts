import { MissionControl } from './mission-control';
import { InputParser } from './input-parser';

export function runMission(input: string): string {
    const lines = input.trim().split('\n');
    const plateau = InputParser.parsePlateau(lines[0]);
    const missionControl = new MissionControl(plateau);

    const results: string[] = [];

    for (let i = 1; i < lines.length; i += 2) {
        const position = InputParser.parsePosition(lines[i]);
        const instructions = InputParser.parseInstructions(lines[i + 1]);
        
        missionControl.addRobot(position);
        const result = missionControl.executeInstructions((i - 1) / 2, instructions);
        results.push(result);
    }

    return results.join('\n');
}

// Test cases
console.log("Test Case 1:");
const testInput1 = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
console.log(runMission(testInput1));

console.log("\nTest Case 2 (Robot 1 reaches boundary):");
const testInput2 = `5 5
0 0 N
MMMMMMM
3 3 E
MMRMMRMRRM`;
console.log(runMission(testInput2));

console.log("\nTest Case 3 (Robot tries to move beyond boundary):");
const testInput3 = `5 5
5 5 N
MMRMMRMRRM
0 0 S
MMMLMMM`;
console.log(runMission(testInput3));