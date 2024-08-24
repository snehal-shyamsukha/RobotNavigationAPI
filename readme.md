# Jupiter Robot Exploration Mission API

## Overview

This project simulates robot navigation on the given Plateu dimensions. It provides a RESTful API that allows users to input navigation instructions for multiple robots and receive their final positions or boundary notifications.

## Project Structure

TypeScript modules:

- `server.ts`: Sets up the Express server and defines the API route.
- `main.ts`: Contains the main logic for running the mission simulation.
- `mission-control.ts`: Manages the overall mission, including multiple robots and plateau boundaries.
- `robot.ts`: Defines individual robot behavior and movement.
- `input-parser.ts`: Handles parsing of input strings for plateau size, robot positions, and instructions.
- `types.ts`: Defines common types and interfaces used throughout the project.

## Setup

1. Clone this repository - git clone git@github.com:snehal-shyamsukha/RobotNavigationAPI.git
2. Install Dependencies - npm i 
3. Start the server - npm start


## API Usage

### Endpoint: POST /navigate

Send a POST request to `http://localhost:3000/navigate` with a JSON body containing the input string.

#### Request Body

```json
{
"input": "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM"
}