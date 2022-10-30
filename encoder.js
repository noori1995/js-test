export function encoder ({inputString, repeatCount}) {

    let result = null

    let temp = inputString.split('')

    for(let j = 0 ; j < repeatCount ; ++j){

        const lastElement = temp.pop()
        temp.unshift(lastElement)

        for( let i = 0 ; i < temp.length ; ++i ) {
            if(temp[i].charCodeAt(0) === 122) {
                //character is z should convert to a
                temp[i] = String.fromCharCode(97)
            } else {
                temp[i] = String.fromCharCode(temp[i].charCodeAt(0) + 1)
            }
        }
    }
        
    result = temp
    
    return result
}