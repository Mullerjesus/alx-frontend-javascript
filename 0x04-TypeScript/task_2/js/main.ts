// Define a string literal type named Subjects  
type Subjects = 'Math' | 'History';  

// Create the TeacherInterface  
interface TeacherInterface {  
    workFromHome(): string;  
    getCoffeeBreak(): string;  
    workTeacherTasks(): string;  
}  

// Create the DirectorInterface  
interface DirectorInterface {  
    workFromHome(): string;  
    getCoffeeBreak(): string;  
    workDirectorTasks(): string;  
}  

// Create the Teacher class that implements TeacherInterface  
class Teacher implements TeacherInterface {  
    workFromHome(): string {  
        return "Cannot work from home";  
    }  

    getCoffeeBreak(): string {  
        return "Cannot have a break";  
    }  

    workTeacherTasks(): string {  
        return "Getting to work";  
    }  
}  

// Create the Director class that implements DirectorInterface  
class Director implements DirectorInterface {  
    workFromHome(): string {  
        return "Working from home";  
    }  

    getCoffeeBreak(): string {  
        return "Getting a coffee break";  
    }  

    workDirectorTasks(): string {  
        return "Getting to director tasks";  
    }  
}  

// Create the createEmployee function  
function createEmployee(salary: number | string): Director | Teacher {  
    if (typeof salary === 'number' && salary < 500) {  
        return new Teacher(); // Return a new Teacher instance  
    } else {  
        return new Director(); // Return a new Director instance  
    }  
}  

// Function to check if employee is a Director  
function isDirector(employee: Director | Teacher): employee is Director {  
    return employee instanceof Director; // Returns true if employee is a Director  
}  

// Function to execute work based on employee type  
function executeWork(employee: Director | Teacher): void {  
    if (isDirector(employee)) {  
        console.log(employee.workDirectorTasks()); // Call for Director  
    } else {  
        console.log(employee.workTeacherTasks()); // Call for Teacher  
    }  
}  

// Create the teachClass function  
function teachClass(todayClass: Subjects): string {  
    if (todayClass === 'Math') {  
        return 'Teaching Math'; // Return message for Math  
    } else if (todayClass === 'History') {  
        return 'Teaching History'; // Return message for History  
    }  
    return ''; // Default return (not expected to hit)  
}  

// Example usage  
console.log(teachClass('Math')); // Output: Teaching Math  
console.log(teachClass('History')); // Output: Teaching History  
executeWork(createEmployee(200)); // Output: Getting to work  
executeWork(createEmployee(1000)); // Output: Getting to director tasks
