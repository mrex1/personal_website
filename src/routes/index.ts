import screens from '../screens'
import {ScreenName} from '../constants'
import {nameToPath} from '../utils/namePathTranslation'
const routes = {}

Object.values(ScreenName)
.map((screenName) => 
    Object.assign(routes, {[nameToPath(screenName)]: screens[screenName]})
)

export default routes