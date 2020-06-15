module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: {
            selector: '//*[@name="evenOddInput"]',
            locateStrategy: 'xpath'
        },
        evenOddButton: {
            selector: '//*[@name="evenOddButton"]',
            locateStrategy: 'xpath'
        },
        evenResults: {
            selector: '//*[@name="evenResults"]',
            locateStrategy: 'xpath'
        },
        oddResults: {
            selector: '//*[@name="oddResults"]',
            locateStrategy: 'xpath'
        },
        
    }
}