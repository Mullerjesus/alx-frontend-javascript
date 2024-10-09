// task_4/js/main.ts  

import { Cpp } from './subjects/Cpp';  
import { Java } from './subjects/Java';  
import { React } from './subjects/React';  

export const cpp = new Cpp();  
export const java = new Java();  
export const react = new React();  

const cTeacher = {  
    firstName: "John",  
    lastName: "Doe",  
    experienceTeachingC: 10  
};  

// Cpp Subject  
console.log("C++");  
cpp.setTeacher(cTeacher);  
console.log(cpp.getRequirements());  
console.log(cpp.getAvailableTeacher());  

// Java Subject  
console.log("Java");  
java.setTeacher(cTeacher);  
console.log(java.getRequirements());  
console.log(java.getAvailableTeacher());  

// React Subject  
console.log("React");  
react.setTeacher(cTeacher);  
console.log(react.getRequirements());  
console.log(react.getAvailableTeacher());
