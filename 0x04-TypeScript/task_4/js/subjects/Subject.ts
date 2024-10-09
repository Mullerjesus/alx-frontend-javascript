// task_4/js/subjects/Subject.ts  

namespace Subjects {  
    export class Subject {  
        teacher: Teacher; // This implements the Teacher interface  
        
        setTeacher(teacher: Teacher): void {  
            this.teacher = teacher; // Set the instance attribute teacher  
        }  
    }  
}
