const fs = require('fs')

function getCss(style) {
    const css = {}
    for (let key in style) {
        const value = style[key]
        let cssKey = key
        const capitalChars = key.match(/[A-Z]/g)
        if (capitalChars !== null) {
            for (let capitalChar of capitalChars) {
                cssKey = cssKey.replace(capitalChar, '-' + capitalChar.toLowerCase())
            }
        }
        css[cssKey] = value
    }
    return JSON.stringify(css, null, 4).replace(/"/g, '').replace(/,/g, ';')
}

function createCssFile(styles, componentName) {
    const css = Object.keys(styles).map((key) => (
        '.' + componentName + '-' + key + ' ' + getCss(styles[key])
    ))
    const cssFileContent = css.join('\n')
    fs.writeFile('./' + componentName + '.css', cssFileContent, () => {console.log('----done----')})
}

const styles = {container: {height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'},
'inner-container': {overflow: 'auto', height: '70%', maxHeight: 500, width: '85%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}
}
createCssFile(styles, 'Skill')