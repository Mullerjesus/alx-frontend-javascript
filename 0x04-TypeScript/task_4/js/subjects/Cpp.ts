// task_4/js/subjects/Cpp.ts  

namespace Subjects {  
    export interface Teacher {  
        experienceTeachingC?: number; // Add optional attribute  
    }  

    export class Cpp extends Subject {  
        getRequirements(): string {  
            return "Here is the list of requirements for Cpp"; // Requirements for Cpp  
        }  

        getAvailableTeacher(): string {  
            if (this.teacher.experienceTeachingC) {  
                return `Available Teacher: ${this.teacher.firstName}`; // Available teacher  
            }  
            return "No available teacher"; // No available teacher  
        }  
    }  
}
