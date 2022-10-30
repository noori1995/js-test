export function operations (ops) {

    let result = 0

    const calcArr = []
    
    const opsArray = ops.split(" ")

    opsArray.forEach(element => {
        if(element == +element){ // its number 
            calcArr.push(element)
        }else if(element === 'D'){
            calcArr.push(+calcArr[calcArr.length - 1] * 2)
        }else if(element === 'R'){
            calcArr.pop()
        }else if(element === '+'){
            calcArr.push(+calcArr[calcArr.length - 1] + +calcArr[calcArr - 2])
        }
    })

    calcArr.forEach(element => {
        result += +element
    })

    return result
}