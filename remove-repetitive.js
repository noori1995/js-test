export function removeRepetitive (string) {

    let result = null
    const uniqChars = []

    string.split('').forEach(element => {
        if(!uniqChars.includes(element)){
            uniqChars.push(element)
        }
    });

    result = uniqChars.join("")

    return result
}