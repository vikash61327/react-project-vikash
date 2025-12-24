// localStorage.clear()

const employees = [
    {
      "id": 1,
      "name": "Shreya",
      "email": "employee1@example.com",
      "password": "123",
      "newTask": 2,
      "completeTask": 3,
      "FailedTask": 0,
      "AcceptTask": 1,
        "taskCount": {
         "active": 1,
         "newTask": 0,
         "completed": 3,
         "failed": 3
      },
      "tasks": [
        {
          "title": "Create landing page",
          "description": "Design and build the main landing page",
          "date": "2025-12-16",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix login bug",
          "description": "Resolve authentication issue on login",
          "date": "2025-12-15",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "API integration",
          "description": "Integrate payment gateway API",
          "date": "2025-12-18",
          "category": "Backend",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "name": "Mahsar",
      "email": "employee2@example.com",
      "password": "123",
       "newTask": 1,
      "completeTask": 0,
      "FailedTask": 0,
      "AcceptTask": 1,
        "taskCount": {
         "active": 1,
         "newTask": 5,
         "completed": 6,
         "failed": 0
      },
      "tasks": [
        {
          "title": "Write unit tests",
          "description": "Add unit tests for user module",
          "date": "2025-12-17",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Optimize database",
          "description": "Improve query performance",
          "date": "2025-12-14",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Deploy to staging",
          "description": "Deploy latest build to staging server",
          "date": "2025-12-19",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "name": "Jaya",
      "email": "employee3@example.com",
      "password": "123",
       "newTask": 20,
      "completeTask": 3,
      "FailedTask": 5,
      "AcceptTask": 1,
        "taskCount": {
         "active": 9,
         "newTask": 1,
         "completed": 0,
         "failed": 2,
      },
      "tasks": [
        {
          "title": "Prepare presentation",
          "description": "Create slides for client meeting",
          "date": "2025-12-20",
          "category": "Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code review",
          "description": "Review pull requests",
          "date": "2025-12-16",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Refactor components",
          "description": "Clean up React components",
          "date": "2025-12-18",
          "category": "Frontend",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "name": "Raksha",
      "email": "employee4@example.com",
      "password": "123",
       "newTask": 2,
      "completeTask": 6,
      "FailedTask": 4,
      "AcceptTask": 1,
      "taskCount": {
         "active": 1,
         "newTask": 1,
         "completed": 1,
         "failed": 0
      },
      "tasks": [
        {
          "title": "Customer support",
          "description": "Respond to customer tickets",
          "date": "2025-12-16",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update documentation",
          "description": "Update API documentation",
          "date": "2025-12-15",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "System monitoring",
          "description": "Monitor server health",
          "date": "2025-12-18",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "name": "Tamanna",
      "email": "employee5@example.com",
      "password": "123",
       "newTask": 5,
      "completeTask": 3,
      "FailedTask": 3,
      "AcceptTask": 0,
        "taskCount": {
         "active": 2,
         "newTask": 0,
         "completed": 5,
         "failed": 1
      },
      "tasks": [
        {
          "title": "Market research",
          "description": "Analyze competitor products",
          "date": "2025-12-17",
          "category": "Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social media posts",
          "description": "Schedule marketing posts",
          "date": "2025-12-16",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Email campaign",
          "description": "Launch promotional email campaign",
          "date": "2025-12-19",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];

const admin = [{
    "id": 101,
    "name": 'RadhaRani',
    "email": "admin1@example.com",
    "password": "123"
},
{
    "id": 102,
    "name": 'RadhaKrishan',
    "email": "admin2@example.com",
    "password": "123"
}];



//create two function for localStorage that set and get the value help of useEffect
export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

// setLocalStorage();

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    

    return {admin, employees};  //it returns both employees and admin data
}