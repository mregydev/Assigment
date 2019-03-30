function reverseStatement(word) {

    if(!word)
    {
        return null
    }

    //array of spaces between each word
    //modified variable name after finishing the test
    let spaces = word.match(/\s+/g) || ['']

    //split words  
    let words = word.split(/\s+/g)

    //return reversed string
    return words.reduce((acc, el, index) => el + (spaces[index - 1] || '') + acc, '')
}

module.exports = reverseStatement
