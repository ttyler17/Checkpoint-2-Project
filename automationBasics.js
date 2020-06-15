var basics = {}
module.exports = {
    beforeEach: browser => {
        basics = browser.page.basicPage()
        basics
            .navigate()
    },
    after: browser => {
        basics
            .end()
    },
    'Even and Odd Test': browser => {
        var mySearch = '1,2,3,4,5,6,7,8,9'
        basics
            .setValue('@evenOddInput', [mySearch])
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.equal=('2,4,6,8')
        basics
            .expect.element('@oddResults').text.to.equal=('1,3,5,7,9')
        basics
            .pause(15000)

    }


}