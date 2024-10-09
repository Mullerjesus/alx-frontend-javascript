// task_4/js/subjects/React.ts  

namespace Subjects {  
    export interface Teacher {  
        experienceTeachingReact?: number; // Add optional attribute  
    }  

    export class React extends Subject {  
        getRequirements(): string {  
            return "Here is the list of requirements for React"; // Requirements for React  
        }  

        getAvailableTeacher(): string {  
            if (this.teacher.experienceTeachingReact) {  
                return `Available Teacher: ${this.teacher.firstName}`; // Available teacher  
            }  
            return "No available teacher"; // No available teacher  
        }  
    }  
}
