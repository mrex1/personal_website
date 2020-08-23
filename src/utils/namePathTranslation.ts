import {ScreenName} from '../constants'

export function nameToPath (name: ScreenName): string {
    return '/' + name
}

export function pathToName (path: string): ScreenName {
    const name = path.replace('/', '')
    return name as ScreenName
}

export function getScreenName (name: ScreenName): string {
    if (name === ScreenName.home) {
        return 'Home'
    }
    return name[0].toUpperCase() + name.substr(1)
}

export function getNextScreen (name: ScreenName): ScreenName | never {
    switch (name) {
        case ScreenName.home:
            return ScreenName.about
        case ScreenName.about:
            return ScreenName.skill
        case ScreenName.skill:
            return ScreenName.experience
        case ScreenName.experience:
            return ScreenName.project
        case ScreenName.project:
            return ScreenName.contact
        case ScreenName.contact:
            return ScreenName.home
        default:
            throw new Error('ScreenName: ' + ScreenName + ' is not supported')
    }
}