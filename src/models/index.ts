export enum SkillCategory {
    lang='Programming Languages',
    website='Websites',
    mobile='Mobile Apps',
    backend='Backend Frameworks',
    db='Databases'
}

export enum SkillLevel {
    top='Most Experienced',
    mid='Experienced',
    low='Learned'
}

export interface Skill {
    name: string;
    level: SkillLevel;
}

export interface _Experience {
    jobPost: string;
    company: string;
    companySite?: string;
    description: string[];
    startDate: Date;
    endDate: Date;
}

export class Experience implements _Experience {
    public jobPost: string;
    public company: string;
    public description: string[];
    public companySite?: string;
    public startDate: Date;
    public endDate: Date;
    public duration: number;
    constructor(_exp: _Experience) {
        this.jobPost = _exp.jobPost
        this.company = _exp.company
        this.description = _exp.description
        this.startDate = _exp.startDate
        this.endDate = _exp.endDate
        this.companySite = _exp.companySite
        this.duration = this._calcDuraction(_exp)
    }

    private _calcDuraction(exp: _Experience): number {
        return exp.endDate.getTime() - exp.startDate.getTime()
    }
}

export class Experiences {
    private _experiences: Experience[] = []
    public sumOfDuration: number = 0
    constructor (experiences?: _Experience[]) {
        if (experiences !== undefined) {
            this._experiences = experiences.map(exp  => new Experience(exp))
            this._experiences.sort((a, b) => {
                return a.startDate > b.startDate ? -1 : 1;
            })
            this.sumOfDuration = this._experiences.reduce((pre, cur) => (pre + cur.duration), 0)
        }
    }

    get experiences() {
        return this._experiences;
    }
}

export interface Project {
    name: string;
    image: string;
    description: string;
    github?: string;
    action?: {
        path: string;
        title: string;
    }
}

export interface globalProps {
    darkMode: number;
}