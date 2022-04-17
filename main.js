let awitSakit = [];
myFunction(4, 4, "");
console.log(awitSakit);
let jet = parseParenthesis(4)
console.log(jet);

awitSakit.forEach((value, index) => {
    let jetIndex = jet.indexOf(value);
    console.log(`awitSakit ${index}, ${value} is equal to jet ${jetIndex}`);
})

jet.forEach((value, index) => {
    let awitSakitIndex = awitSakit.indexOf(value);
    console.log(`jet ${index}, ${value} is equal to awitSakit ${awitSakitIndex}`);
})

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