# Technical Task for Full Stack Software Developer

This project is a full-stack web application built with React.js for the frontend and Express.js for the backend. It allows users to interact with a set of textboxes, select certain items, and save the selected items along with their total to a MongoDB database.

# Prject Demo

## Features

- Add textboxes dynamically.
- Select individual textboxes or all at once.
- Calculate the total value of selected text boxes.
- Save selected items and their total to a MongoDB database.

## Tech Stacks

- React.js
- Express.js
- MongoDB
- Node.js
  
## Installation

1. Clone the repository:

```bash
git clone https://github.com/jayeeed/Technical_Task_Maliha.git
```

2. Navigate to the project directory:

```bash
cd Technical_Task_Maliha
```

3. Install dependencies for both frontend and backend:

```bash
npm install
cd server
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the `root` directory.
   - Add the following environment variables to the `.env` file:
     ```bash
     VITE_PORT = <your-port>
     VITE_APP_API = <your-server-url>
     ```
   - Create a `.env` file in the `server` directory.
   - Add the following environment variables to the `.env` file:
     ```bash
     PORT = <your-port>
     MONGODB_URL = <your-mongodb-url>
     ```

6. Start both frontend and backend servers `concurrently`:

```bash
npm start
```
`Note:` I already set `start` script as:
`"start": "concurrently -n \"FRONTEND,BACKEND\" -c \"green,blue\" -p \"[{name}]\" \"npm run start:frontend\" \"npm run start:backend\"",`

Access the application `locally` at: [Frontend](http://localhost:3000) and [Backend](http://localhost:5000)

## Deployment

`Deployed` both [Frontend](https://task-maliha-react.vercel.app/) and [Backend](https://task-maliha-express.vercel.app/) on Vercel.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.
