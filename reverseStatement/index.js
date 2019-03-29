function reverseStatement(word) {

    if(!word)
    {
        return null
    }

    //number of spaces between each word
    let numSpaces = word.match(/\s+/g) || ['']

    //split words  
    let words = word.split(/\s+/g)

    //return reversed string
    return words.reduce((acc, el, index) => el + (numSpaces[index - 1] || '') + acc, '')
}

module.exports = reverseStatement