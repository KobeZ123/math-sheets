
// generates a math problem based on the given binary operation 
export function GenerateBinaryOperation(operation: string) {
    switch(operation) {
        case "addition": 
            break;
        case "subtraction":
            break;
        case "multiplication": 
            break;
        case "division": 
            break;
    }
}

// generates a number based on the minimun condition and the maximum condition 
export function GenerateNumber(minNum: number, maxNum: number): number {
    let number = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    return number;
}