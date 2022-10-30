export function getRepeatedInfo (number) {

    const result = {}

    String(number).split('').forEach(element => {
        for( let i = 0 ; i < +element ; ++i ){
            if(result[element]){
                result[element] += element
            }
            else{
                result[element] = element
            }
        }
    })

    return result
}