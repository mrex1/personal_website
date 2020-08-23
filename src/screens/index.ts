import Home from './Home'
import About from './About'
import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import {ScreenName} from '../constants'

const screens = {
    [ScreenName.home]: Home,
    [ScreenName.about]: About,
    [ScreenName.skill]: Skill,
    [ScreenName.experience]: Experience,
    [ScreenName.project]: Project,
    [ScreenName.contact]: Contact,
}
export default screens 