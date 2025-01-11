
## Local Environment Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:

-   **Node.js** (v14.x or later)
    
-   **Sqlite** – make sure Sqlite is installed and running locally

### Installation Steps

1.  **Clone the repository:**
    
    `git clone git@github.com:nhatlang19/NguyenManhLuan.git`
    
2.  **Install dependencies:** Run the following command to install all required Node.js modules:
    
    `cd problem5/cruder-server && npm install` 
    
3.  **Start the development server:**

    `npm run dev`
    
    This will start the application at http://localhost:3000.
    

### Testing the API

1.  **Swagger Documentation:**

    `http://localhost:3000/api-docs` 
    
    
2.  **API Requests:**
    
    -   **Get All resources:**
        
        `GET /api/resources` 
        
    -   **Create resource:**
        
        `POST /api/resources
        {
          "name": "test 1",
          "description": "test 1"
        }` 
        
