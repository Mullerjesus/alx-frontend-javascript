// Define the Student interface  
interface Student {  
    firstName: string;  
    lastName: string;  
    age: number;  
    location: string;  
}  

// Create two student objects  
const student1: Student = {  
    firstName: "John",  
    lastName: "Doe",  
    age: 20,  
    location: "New York",  
};  

const student2: Student = {  
    firstName: "Jane",  
    lastName: "Smith",  
    age: 22,  
    location: "Los Angeles",  
};  

// Create an array to hold the students  
const studentsList: Student[] = [student1, student2];  

// Function to render the table  
function renderTable() {  
    const table = document.createElement('table');  
    const headerRow = table.insertRow();  
    headerRow.insertCell().textContent = "First Name";  
    headerRow.insertCell().textContent = "Location";  

    // Append each student to the table  
    studentsList.forEach(student => {  
        const row = table.insertRow();  
        row.insertCell().textContent = student.firstName;  
        row.insertCell().textContent = student.location;  
    });  

    // Add the table to the document body  
    document.body.appendChild(table);  
}  

// Call the function to render the table  
renderTable();
