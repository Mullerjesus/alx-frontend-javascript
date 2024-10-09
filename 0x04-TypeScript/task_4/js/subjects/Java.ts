// task_4/js/subjects/Java.ts  

namespace Subjects {  
    export interface Teacher {  
        experienceTeachingJava?: number; // Add optional attribute  
    }  

    export class Java extends Subject {  
        getRequirements(): string {  
            return "Here is the list of requirements for Java"; // Requirements for Java  
        }  

        getAvailableTeacher(): string {  
            if (this.teacher.experienceTeachingJava) {  
                return `Available Teacher: ${this.teacher.firstName}`; // Available teacher  
            }  
            return "No available teacher"; // No available teacher  
        }  
    }  
}
