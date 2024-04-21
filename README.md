# Smash Ultimate Overlay

Welcome to the Smash Ultimate Overlay tool! This tool provides a dashboard for managing player and bracket information during Smash tournaments. The dashboard updates an HTML template which can be imported into OBS for a live display.

## Features

- **Live Scoreboard**: Update scores, player tags, and character icons in real-time.
- **Round Management**: Track and display current round and match status.
- **OBS Integration**: Seamlessly integrate with OBS using a Browser source to display live updates during streams.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/en/download/) installed on your computer. This project was bootstrapped with Create React App.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/nwelchr/smash-tournament-overlay
   cd smash-tournament-overlay
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the dashboard:
   ```
   npm start
   ```

   Open a new terminal window and run:
   ```
   cd src
   node server.js
   ```

## Usage

- **Dashboard**: Access the dashboard through your web browser at `http://localhost:3000`. Here you can update player information, bracket status, and more. Changes are updated live as you press "Update" or "Reset".
- **OBS Setup**: In OBS, add a new Browser source and set the URL to `http://localhost:3001/overlay`. This will display the current game information.

## Troubleshooting

- **Node.js not recognized**: Ensure that Node.js is installed and that your PATH environment variable includes the path to the Node.js executable.
- **Port already in use**: Make sure that no other applications are using ports 3000 or 3001. If necessary, you can modify the port settings in the project files.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
