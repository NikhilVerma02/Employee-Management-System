// localStorage.clear()

const employees = [
    {
        "id": 1,
        "first_name": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-01-01",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 1
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-01-02",
                "category": "Testing",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 2
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-01-03",
                "category": "Documentation",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 3
            }
        ],
        "task_counts": {
            "active": 2,
            "new_task": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "first_name": "Ravi",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-01-04",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 1
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-01-05",
                "category": "Meeting",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 2
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-01-06",
                "category": "Review",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 3
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-01-07",
                "category": "Design",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 4
            }
        ],
        "task_counts": {
            "active": 3,
            "new_task": 3,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "first_name": "Kiran",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-01-08",
                "category": "Testing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 1
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-01-09",
                "category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 2
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-01-10",
                "category": "Documentation",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 3
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-01-11",
                "category": "Meeting",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 4
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-01-12",
                "category": "Review",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 5
            }
        ],
        "task_counts": {
            "active": 3,
            "new_task": 3,
            "completed": 2,
            "failed": 0
        }
    },
    {
        "id": 4,
        "first_name": "Anjali",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-01-13",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 1
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-01-14",
                "category": "Testing",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 2
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-01-15",
                "category": "Documentation",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 3
            }
        ],
        "task_counts": {
            "active": 2,
            "new_task": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "first_name": "Neha",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-01-16",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 1
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-01-17",
                "category": "Testing",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 2
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-01-18",
                "category": "Review",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 3
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-01-19",
                "category": "Design",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 4
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-01-20",
                "category": "Documentation",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_number": 5
            },
            {
                "title": "Task 6",
                "description": "Description for Task 6",
                "date": "2024-01-21",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_number": 6
            }
        ],
        "task_counts": {
            "active": 4,
            "new_task": 4,
            "completed": 2,
            "failed": 0
        }
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}