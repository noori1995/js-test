export function isBalance (input) {

    let result = null

    let openParenthesisCount = 0 
    let closeParenthesisCount = 0
    let openCurlyBracketCount = 0
    let closeCurlyBracketCount = 0
    let openBracketCount = 0
    let closeBracketCount = 0

    input.split('').forEach(element => {

        element === '(' && openParenthesisCount++ ||
        element === ')' && closeParenthesisCount++ ||
        element === '{' && openCurlyBracketCount++ ||
        element === '}' && closeCurlyBracketCount++ ||
        element === '[' && openBracketCount++ ||
        element === ']' && closeBracketCount++

        // check is there any close element before enough open elements
        if( closeParenthesisCount > openParenthesisCount || closeCurlyBracketCount > openCurlyBracketCount || closeBracketCount > openBracketCount ) {
            result = false
        }
    })
    if( (openParenthesisCount === closeParenthesisCount && openCurlyBracketCount === closeCurlyBracketCount && openBracketCount === closeBracketCount) && result !== false ){
        result = true
    } else {
        result = false
    }

    return result
}