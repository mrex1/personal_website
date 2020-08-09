import {ScreenName} from './screenName.constant'

export interface Color {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    inactive: string;
    logoBack: string;
    logoText: string;
}

export type ColorForScreen = {
    [key in ScreenName]: Color
}

export const colors: ColorForScreen = {
    [ScreenName.home]: {
        primary: '#FFAA00',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#0022FF',
        inactive: '#A3A3A3',
        logoBack: 'black',
        logoText: '#FFAA00'
    },
    [ScreenName.about]: {
        primary: '#FFAEAE',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#FF0000',
        inactive: '#F1F1F1',
        logoBack: '#FFAEAE',
        logoText: 'white'
    },
    [ScreenName.skill]: {
        primary: 'white',
        secondary: '#0022FF',
        textPrimary: 'black',
        textSecondary: 'white',
        inactive: '#DCDCDC',
        logoBack: '#0022FF',
        logoText: 'white'
    },
    [ScreenName.experience]: {
        primary: '#9FECFF',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#034150',
        inactive: 'white',
        logoBack: '#9FECFF',
        logoText: 'white'
    },
    [ScreenName.project]: {
        primary: '#60026E',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#3acd4a',
        inactive: '#DCDCDC',
        logoBack: 'black',
        logoText: '#60026E'
    },
    [ScreenName.contact]: {
        primary: '#61B48B',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#034150',
        inactive: 'white',
        logoBack: '#61B48B',
        logoText: 'white'
    }
}