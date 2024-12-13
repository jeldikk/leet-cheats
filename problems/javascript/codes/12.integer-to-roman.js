/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // basic idea is to create a map of symbols 
    // in decreasing order and digits count wise
    // both that of existing and decimals starting with 4 and 9
    
    const hashMap = new Map();
    hashMap.set(1000, 'M');
    hashMap.set(900, 'CM');
    hashMap.set(500, 'D');
    hashMap.set(400, 'CD');
    hashMap.set(100, 'C');
    hashMap.set(90, 'XC');
    hashMap.set(50, 'L');
    hashMap.set(40, 'XL');
    hashMap.set(10, 'X'),
    hashMap.set(9, 'IX');
    hashMap.set(5, 'V');
    hashMap.set(4, 'IV');
    hashMap.set(1, 'I');

    if(num in hashMap.keys()){
        return hashMap.get(num)
    }

    let result = ''

    for(let [val, key] of hashMap){
        console.log({num, result})
        if(num === 0){
            break
        }
        const quot = Math.floor(num/val);
        result = result + key.repeat(quot);
        num = num - quot*val;
    }
    
    return result
};

module.exports = {
    intToRoman
}