# Transaction Backend API

## Description
This is a Node.js backend application that provides a REST API to manage transaction data. It includes several endpoints to fetch transaction information, statistics, bar chart data, and pie chart data. The application interacts with a MongoDB database and initializes the data from a third-party API.

## Features
- **Initialize Database**: Fetches transaction data from a third-party API and populates the database with seed data.
- **Transaction List**: Fetches transaction data based on the selected month, supporting pagination and search functionality (by title, description, or price).
- **Statistics**: Provides the total sales amount, total number of sold items, and total number of unsold items for the selected month.
- **Bar Chart Data**: Returns price range data (e.g., 0-100, 101-200, etc.) for the selected month.
- **Pie Chart Data**: Provides the number of items in each unique category for the selected month.
- **Combined API**: Combines the responses of the statistics, bar chart, and pie chart APIs into a single response.

## Technologies Used
- **Node.js**: JavaScript runtime used to build the server.
- **Express.js**: Web framework for building the API.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Axios**: For making HTTP requests to the third-party API.
- **Cors**: Middleware to handle cross-origin requests.
- **MongoDB**: Database used to store transaction data.

## Installation Steps
1. Clone the repository:  
   `git clone <your-repository-url>`
2. Navigate to the project directory:  
   `cd <project-folder>`
3. Install dependencies:  
   `npm install`
4. Start the server:  
   `npm start`
5. The server will be running at `http://localhost:3000`.

## Folder Structure
- `models/Transaction.js`: Defines the Mongoose schema for transactions.
- `routes/transactions.js`: Contains the transaction-related routes, including search and pagination.
- `routes/statistics.js`: Handles the API for fetching transaction statistics.
- `routes/barChart.js`: Contains the route for fetching bar chart data.
- `routes/pieChart.js`: Contains the route for fetching pie chart data.
- `routes/combined.js`: Combines statistics, bar chart, and pie chart data into a single response.
- `routes/initialize.js`: Initializes the database by fetching data from the third-party API and storing it in MongoDB.
- `server.js`: The main server file that sets up the API routes and connects to MongoDB.

## API Endpoints
- **GET /api/initialize**: Initializes the database by fetching transaction data from a third-party API.
- **GET /api/transactions**: Retrieves transaction data based on search parameters (title, description, price) and pagination (page, per page).
- **GET /api/statistics**: Returns statistics for the selected month, including total sales, sold items, and unsold items.
- **GET /api/barChart**: Returns price range distribution data for the selected month (e.g., 0-100, 101-200).
- **GET /api/pieChart**: Returns category-wise item distribution for the selected month.
- **GET /api/combined**: Combines the responses from the statistics, bar chart, and pie chart APIs into a single response.

## Example Usage
1. To initialize the database, call:  
   `GET /api/initialize`
2. To get a list of transactions for a selected month with pagination and search:  
   `GET /api/transactions?month=March&page=1&per_page=10`
3. To fetch statistics for the selected month:  
   `GET /api/statistics?month=March`
4. To fetch bar chart data for the selected month:  
   `GET /api/barChart?month=March`
5. To fetch pie chart data for the selected month:  
   `GET /api/pieChart?month=March`
6. To fetch a combined response (statistics, bar chart, pie chart):  
   `GET /api/combined?month=March`

## MongoDB Configuration
The backend application uses MongoDB as the database. The database connection is established via the following URL:  
`mongodb://127.0.0.1:27017/transactionsDB`  
Make sure MongoDB is running locally or configure the connection URL accordingly.

## Contact
For any questions or contributions, feel free to reach out to:
- [Your Name]  
- [Your Email Address]
