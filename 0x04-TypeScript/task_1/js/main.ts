// Interface for the Teacher  
interface Teacher {  
    firstName: string;  
    lastName: string;  
    fullTimeEmployee: boolean;  
    yearsOfExperience?: number;  
    location: string;  
    [key: string]: any; // allows additional properties  
}  

// Create a teacher object  
const teacher3: Teacher = {  
    firstName: 'John',  
    lastName: 'Doe',  
    location: 'London',  
    fullTimeEmployee: false,  
    contract: false, // additional property  
};  

console.log(teacher3);  

// Extend Teacher to create Directors interface  
interface Directors extends Teacher {  
    numberOfReports: number; // required attribute  
}  

// Create a director object  
const director1: Directors = {  
    firstName: 'John',  
    lastName: 'Doe',  
    location: 'London',  
    fullTimeEmployee: true,  
    numberOfReports: 17,  
};  

console.log(director1);  

// Define the interface for the function  
interface printTeacherFunction {  
    (firstName: string, lastName: string): string; // function accepts two strings and returns a string  
}  

// Create the printTeacher function  
const printTeacher: printTeacherFunction = (firstName, lastName) => {  
    return `${firstName.charAt(0)}. ${lastName}`; // return first letter of firstName and full lastName  
};  

// Example usage of printTeacher  
console.log(printTeacher("John", "Doe")); // Output: J. Doe  

// Define the interface for the constructor  
interface StudentClassConstructor {  
    firstName: string;  
    lastName: string;  
}  

// Define the interface for the class  
interface StudentClassInterface {  
    workOnHomework(): string; // method that returns a string  
    displayName(): string; // method that returns a string  
}  

// Create the StudentClass implementing the interfaces  
class StudentClass implements StudentClassInterface {  
    firstName: string;  
    lastName: string;  

    constructor(firstName: string, lastName: string) {  
        this.firstName = firstName;  
        this.lastName = lastName;  
    }  

    workOnHomework(): string {  
        return "Currently working"; // return the working message  
    }  

    displayName(): string {  
        return this.firstName; // return the firstName of the student  
    }  
}  

// Example usage of StudentClass  
const student1 = new StudentClass("John", "Doe");  
console.log(student1.workOnHomework()); // Output: Currently working  
console.log(student1.displayName()); // Output: John
