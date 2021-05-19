// ukazka jak muze vypadat VICE testcasu jedne "feature" / stranky

// CO BUDEME TESTOVAT

describe('section fairytale', () => {
    before(()=>{
        console.log('BEFORE ALL TESTS')
    })
    
    beforeEach(() => {
        console.log('BEFORE EVERY TESTS')
    })

    it('has correct sum of paragraphs', () => {
        console.log('TESTCASE - has correct sum of paragraphs')
    })
    it('has correct text', () => {
        console.log('TESTCASE - has correct text')
    })
})

xdescribe('section HINT', () => {
    before(()=>{
        console.log('BEFORE ALL TESTS')
    })
    
    beforeEach(() => {
        console.log('BEFORE EVERY TESTS')
    })

    it.skip('has correct sum of paragraphs', () => {
        console.log('TESTCASE - has correct sum of paragraphs')
    })
    xit('has correct text', () => {
        console.log('TESTCASE - has correct text')
    })
})