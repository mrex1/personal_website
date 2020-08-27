import {Skill, SkillCategory, SkillLevel, Experiences, Project} from '../models'
import sortPng from '../images/sorting_visual.png'

export type Skills = {[val in SkillCategory]: Skill[]}

export const myskills: Skills = {
    [SkillCategory.lang]: [
        {name: 'JavaScript', level: SkillLevel.top},
        {name: 'HTML & CSS', level: SkillLevel.top},
        {name: 'Python', level: SkillLevel.mid},
        {name: 'Typescript', level: SkillLevel.mid},
        {name: 'Java', level: SkillLevel.low},
        {name: 'SQL', level: SkillLevel.low},
        {name: 'C++', level: SkillLevel.low}
    ],
    [SkillCategory.website]: [
        {name: 'React', level: SkillLevel.top},
        {name: 'Vue', level: SkillLevel.mid}
    ],
    [SkillCategory.mobile]: [
        {name: 'React Native', level: SkillLevel.top}
    ],
    [SkillCategory.db]: [
        {name: 'MySQL', level: SkillLevel.mid},
        {name: 'MongoDB', level: SkillLevel.low}
    ],
    [SkillCategory.backend]: [
        {name: 'ExpressJS', level: SkillLevel.mid},
        {name: 'Django', level: SkillLevel.mid}
    ]
}

export const myExperiences: Experiences = new Experiences([
    {
        jobPost: 'R&D intern',
        company: 'Chun Shing Development ( Hong Kong ) Limited',
        companySite: 'http://www.chunshing.hk/en/aboutus/',
        description: [
            'Built two mobile apps for an iot project with React Native',
            'One of the apps used for visualizing data collected from the iot devices',
            'Another app collects data from a iot device, and further upload it to the server',
            'Learned JavaScript and React Native in a month, and built the two apps'
        ],
        startDate: new Date('2018-08-01'),
        endDate: new Date('2018-08-31')
    },
    {
        jobPost: 'Research assistant',
        company: 'HKU (Department of Electrical and Electronic Engineering)',
        companySite: 'https://www.eee.hku.hk/about/',
        description: [
            'Built a mobile app with React Native',
            'Features of the App:',
            'visualizing data from server',
            'allow users to fill in surveys'
        ],
        startDate: new Date('2018-12-01'),
        endDate: new Date('2018-12-31')
    },
    {
        jobPost: 'Summer intern',
        company: 'Avo Insurance Company Limited',
        companySite: 'https://www.heyavo.com/en/about/',
        description: [
            'Mainly contributed in building Avo\'s website with Vue.js',
            'Wrote NodeJS programs to scrap data for other teams to conduct product researches',
            'Built an internal tool that allows non-programmers to edit email templates'
        ],
        startDate: new Date('2019-06-12'),
        endDate: new Date('2019-11-30')
    },
    {
        jobPost: 'Summer intern',
        company: 'Hong Kong Applied Science and Technology Research Institute Company Limited',
        companySite: 'https://www.astri.org/about/',
        description: [
            'Mainly contributed in developing a website with React.',
            'Created a set of components and various web pages.'
        ],
        startDate: new Date('2020-07-06'),
        endDate: new Date('2020-08-28')
    }
])

export const myProjects: Project[] = [
    {
        name: 'Sorting visualisation',
        description: 'Visualise sorting algorithms with the HTML canvas element using plain JavaScript',
        image: sortPng,
        github: 'https://github.com/mrex1/sorting_visualization/'
    }
]