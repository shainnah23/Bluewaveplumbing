
# Bluewaveplumbing
Author:Mugure Kamau

This is a simple web application for Bluewave Plumbing, allowing customers to book plumbing services and view all scheduled services.

## Features

- **Book a Service:** Customers can fill out a form to book a plumbing service.
- **View Scheduled Services:** All scheduled services are displayed on the main page.
- **Persistent Storage:** Service bookings are saved in a local `bd.json` file on the server.

## Project Structure

```
Bluewaveplumbing/
├── index.html
├── src/
│   └── Node.js
├── css/
│   └── style.css
├── bd.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd Bluewaveplumbing
   ```

2. **Install dependencies:**
   ```sh
   npm install express
   ```

### Running the Server

```sh
node src/Node.js
```

The server will start at [http://localhost:3000](http://localhost:3000).

### Using the App

- Open `index.html` in your browser or visit [http://localhost:3000](http://localhost:3000) if running the server.
- Fill out the booking form to schedule a service.
- View all scheduled services below the form.

## API Endpoints

- `GET /api/services` — Returns all scheduled services.
- `POST /api/services` — Adds a new service booking.

## Notes

- All data is stored in `bd.json` in the project root.
- The app serves static files