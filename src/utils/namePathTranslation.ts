import {ScreenName} from '../constants/screenName.constant'

export function nameToPath (name: ScreenName): string {
    return '/' + name
}

export function pathToName (path: string): ScreenName {
    const name = path.replace('/', '')
    return name as ScreenName
}