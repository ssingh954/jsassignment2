//Write a function using switch case to find the grade of a student based on marks obtained

var  grade = "D";

switch (grade){

    case "S":
        console.log("marks are between 90 and 100");
        break;
 
    case "A":
        console.log("marks are between 80 and 90");
        break; 
        
    case "B":
        console.log("marks are between 70 and 80");
        break;
    
    case "C":
        console.log("marks are between 60 and 70");
        break; 

    case "D":
        console.log("marks are between 50 and 60");
        break; 
    
    case "E":
        console.log("marks are between 40 and 50");
        break;

    case "Student has failed":
        console.log("marks are between 0 and 40");
        break;
    
    default:
        console.log("Invalid marks");
}