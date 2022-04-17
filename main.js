let awitSakit = [];
myFunction(4, 4, "");
console.log(awitSakit);
console.log(parseParenthesis(4));

function myFunction(left, right, currentString) {
    if (left > 0) {
        currentString += "(";
        left--;
        myFunction(left, right, currentString);
        if (left === 0) {
            return;
        }
        for (;right > left;) {
            currentString += ")";
            right--;
            myFunction(left, right, currentString);
        }
    } else if (right > 0) {
        currentString += ")";
        right--;
        myFunction(left, right, currentString);
    } else {
        console.log(currentString);
        awitSakit.push(currentString);
    }
}

function parseParenthesis(num) {
    if (num === 1) return ['()'];

    let result = [];
    parseParenthesis(num - 1).forEach(tempString => {
        result.push('(' + tempString + ')');

        let a = '()' + tempString;
        result.push(a);

        let b = tempString + '()';
        if (a != b) {
            result.push(b);
        }
    })

    return result;
}

// Print (()), ()()
// 