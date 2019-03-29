const expect=require('chai').expect

const reverseStatement=require('./index')

describe('reverse  statement test cases',()=>{

    it('should return null in case passed paramter is null',(done)=>{

        expect(reverseStatement(null)).to.be.null

        done()
    })

    it('should return same word in case passed paramter is one word',(done)=>{

        expect(reverseStatement('mregydev')).to.equals('mregydev')
        
        done()
    })


    it('should return reversed statement in case passed paramter is more than one word',(done)=>{

        expect(reverseStatement('mregydev  is good')).to.equals('good is  mregydev')
        
        done()
    })
})