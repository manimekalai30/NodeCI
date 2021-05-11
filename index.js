function addition(args){
    // Addition operation
    const result = args.reduce((a,b)=>{
        return a + b;
    });
    return result;
};

function multiplication(arg1,arg2){
    // Multiplication operation
    return arg1 * arg2;
};
function division(arg1,arg2){
    // Multiplication operation
    return arg1 / arg2;
};
function modulo(arg1,arg2){
    // Multiplication operation
    return arg1 % arg2;
};
function leapYear(year){
    console.log("Executed")
    let IsLeapYear = false;
    // Check leap year or not
    if(year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                IsLeapYear = true;
            }
        }else{
            IsLeapYear = true;
        }
    }else{
        IsLeapYear = false;
    }
    return IsLeapYear;
};

function calculate(year){
    console.log("Executed..");
    let IsLeapYear = false;
    // Check leap year or not
    if(year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                IsLeapYear = true;
            }
        }else{
            IsLeapYear = true;
        }
    }else{
        IsLeapYear = false;
    }
    return IsLeapYear;
};

module.exports.addition = addition;
module.exports.multiplication = multiplication;
module.exports.leapYear = leapYear;
module.exports.division = division;
module.exports.modulo = modulo;
