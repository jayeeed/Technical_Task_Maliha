# Technical Task for Full Stack Software Developer

This project is a full-stack web application built with React.js for the frontend and Express.js for the backend. It allows users to interact with a set of textboxes, select certain items, and save the selected items along with their total to a MongoDB database.

# Prject Demo

https://github.com/jayeeed/Technical_Task_Maliha/assets/137998593/73c062cf-d5d4-45e5-a96a-b6e7783d529b

# Screen Shots

![vscode](https://github.com/jayeeed/Technical_Task_Maliha/assets/137998593/5f7751dc-ae8a-4e26-a7dd-961f34f035b2)
![deploy selected](https://github.com/jayeeed/Technical_Task_Maliha/assets/137998593/873b5689-d7ef-4989-a73d-cd765ddb4e55)
![deploy selected all](https://github.com/jayeeed/Technical_Task_Maliha/assets/137998593/12662e65-adc3-44fa-8345-8830846a5366)
![deploy db](https://github.com/jayeeed/Technical_Task_Maliha/assets/137998593/2c815ada-9a5c-4ba6-8706-dbfc829e8993)

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
