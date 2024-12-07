## Description

TableApp is a web application that displays dynamic tables populated with data fetched from a backend API. The backend is built using Sinatra, and the frontend is built using HTML, CSS, and JavaScript.

## Features

- Displays two tables with dynamic data
- Backend API built with Sinatra
- Frontend styled with CSS and populated using JavaScript

## Setup

### Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler
- Node.js (for frontend development)
- Git

### Backend Setup

1. Clone the backend repository:
    ```sh
    git clone https://github.com/yourusername/TableApp_Backend.git
    cd TableApp_Backend
    ```

2. Install the required gems:
    ```sh
    bundle install
    ```

3. Start the Sinatra server:
    ```sh
    ruby main.rb
    ```

4. The backend server should now be running at `http://localhost:4567`.

### Frontend Setup

1. Clone the frontend repository:
    ```sh
    git clone https://github.com/yourusername/TableApp_Frontend.git
    cd TableApp_Frontend
    ```

2. Open `index.html` in your browser to view the application.

## Usage

- The application fetches data from the backend API and populates two tables.
- Table 1 displays a list of key-value pairs.
- Table 2 displays computed values based on the data from Table 1.
