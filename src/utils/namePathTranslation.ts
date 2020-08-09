import {ScreenName} from '../constants/screenName.constant'

export function nameToPath (name: ScreenName): string {
    return '/personal_website/' + name
}

export function pathToName (path: string): ScreenName {
    const name = path.replace(/\/personal_website/, '')
                .replace('/', '')
    console.log(name)
    return name as ScreenName
}