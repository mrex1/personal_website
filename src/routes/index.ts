import screens from '../screens'

const routes = {}

Object.keys(screens).map((screenName: string) => 
    Object.assign(routes, {['/' + screenName.toLowerCase()]: (screens as any)[screenName]})
)

export default routes