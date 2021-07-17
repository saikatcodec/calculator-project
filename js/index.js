// Get acces from input
let display = document.getElementById('calc');
// Get all type of button
let btns = document.getElementsByClassName('btn');
// Number variable where store displays data
let num1, num2;
// Operator variable where store calculators Operator
let operator = [];
// Use operator or not
let isUseOperator = false;
// Press equal or not
let isUseEqual = false;
// Calculator is reset or not
let isReset = true;

// Add click event with button
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btnClicked(btn);
    });
})

function btnClicked(btn) {
    /*
    ** All logics gose here
    * How button work
    */
    
    switch (btn.id) {
        case 'reset':
            display.value = 0;
            isReset = true;
            resetCal();
            break;
            
        case 'plus-or-minus':
            negetivePositive(extractValue());
            break;
        
        case 'percent':
            operator.push('%');
            workOfOpearator();
            break;
            
        case 'sqrt':
            operator.push('√');
            workOfOpearator();
            break;
            
        case 'seven':
            setDisplayValue(7);
            break;
            
        case 'eight':
            setDisplayValue(8);
            break;
        
        case 'nine':
            setDisplayValue(9);
            break;
            
        case 'divide':
            operator.push('/');
            workOfOpearator();
            break;
            
        case 'four':
            setDisplayValue(4);
            break;
            
        case 'five':
            setDisplayValue(5);
            break;
        
        case 'six':
            setDisplayValue(6);
            break;
            
        case 'multi':
            operator.push('*');
            workOfOpearator();
            break;
            
        case 'one':
            setDisplayValue(1);
            break;
            
        case 'two':
            setDisplayValue(2);
            break;
        
        case 'three':
            setDisplayValue(3);
            break;
            
        case 'minus':
            operator.push('-');
            workOfOpearator();
            break;
            
        case 'zero':
            setDisplayValue(0);
            break;
            
        case 'dot':
            setDisplayValue('.');
            break;
        
        case 'equal':
            operator.push('=');
            isUseEqual = true;
            workOfOpearator();
            // After doing sum calculator is reset
            resetCal();
            break;
            
        case 'plus':
            operator.push('+');
            workOfOpearator();
            break;
        
        default:
            console.log('Other');
    }
}

function negetivePositive(num) {
    
    /*
    ** Positive number convert to negetive number
    ** Negetive number convert to positive number
    */
    
    if (num > 0) {
        num *= -1;
        display.value = num
    } else if (num < 0) {
        num *= -1;
        display.value = num
    } else {
        display.value = 0;
    }
}

function extractValue() {
    // Extract Value from display
    
    return display.value;
}

function setDisplayValue(value) {
    // Set Display value
    
    // Take value from display
    let displayValue = extractValue();
    
    // Check display value length
    if ( displayValue.includes('-') ? displayValue.length < 9 : displayValue.length < 8 ) {
        
        // Check Operator are available or not
        if (isUseOperator || isUseEqual) {
            display.value = '';
            display.value += value;
            isUseOperator = false;
            isUseEqual = false;
        }
        // If reset button found then set value of button
        else if (isReset) {
            display.value = '';
            display.value += value;
            isReset = false;
        }
        else if (value.length < 8 && value !== '.') {
            display.value = value;
            isReset = true;
            console.log(value);
        }
        else { // Otherwise add value of button
            display.value += value;
            console.log(value);
        }
    }
}

function workOfOpearator() {
    if (num1) {
        num2 = Number(extractValue());
        switch (operator[operator.length - 2]) {
            case '+':
                num1 += num2;
                isUseOperator = true;
                setDisplayValue(num1);
                break;
                
            case '-':
                num1 -= num2;
                isUseOperator = true;
                setDisplayValue(num1);
                break;
                
            case '*':
                num1 *= num2;
                isUseOperator = true;
                setDisplayValue(num1);
                break;
            case '/':
                num1 *= num2;
                isUseOperator = true;
                setDisplayValue(num1);
                break;
                
            case '%':
                num1 = num1 * (1 / 100);
                isUseOperator = true;
                setDisplayValue(num1);
                break;
                
            case '√':
                num1 = Math.sqrt(num1);
                isUseOperator = true;
                setDisplayValue(num1);
                break;
            
            case '=':
                workOfOpearator();
                break;
        }
    } else {
        num1 = Number(extractValue());
        isUseOperator = true;
    }
}

function resetCal() {
    num1 = undefined;
    num2 = undefined;
    operator = [];
    isUseOperator = false;
}
