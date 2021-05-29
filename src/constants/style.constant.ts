import {ScreenName} from './screenName.constant'

export type isScreenReversed = {
    [key in ScreenName]: boolean;
}

export const reverseMap: isScreenReversed = {
    [ScreenName.home]: false,
    [ScreenName.about]: true,
    [ScreenName.skill]: false,
    [ScreenName.experience]: true,
    [ScreenName.project]: false,
    [ScreenName.contact]: true
}

export interface Color {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    inactive: string;
    logoBack: string;
    logoText: string;
    nextBtn?: string;
    drawerBtn?: string;
    drawerBg?: string;
    drawerText?: string;
    drawerActive?: string;
}

export type ColorForScreen = {
    [key in ScreenName]: Color
}

export type ColorTheme = {
    [darkMode: number]: ColorForScreen
}

const darkColor: Color = {
    primary: "black",
    secondary: "#845600",
    textPrimary: "white",
    textSecondary: "orange",
    inactive: "white",
    logoBack: "orange",
    logoText: "black",
    nextBtn: "black",
    drawerBtn: "white",
    drawerBg: "black",
    drawerText: "white",
    drawerActive: "orange",
}

const darkColors: ColorForScreen = {
    [ScreenName.home]: darkColor,
    [ScreenName.about]: darkColor,
    [ScreenName.contact]: darkColor,
    [ScreenName.experience]: darkColor,
    [ScreenName.project]: darkColor,
    [ScreenName.skill]: darkColor
}

const lightColors: ColorForScreen = {
    [ScreenName.home]: {
        primary: '#FFAA00',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#0022FF',
        inactive: '#A3A3A3',
        logoBack: 'black',
        logoText: '#FFAA00',
        drawerText: 'black'
    },
    [ScreenName.about]: {
        primary: '#FFAEAE',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#FF0000',
        inactive: '#F1F1F1',
        logoBack: '#FFAEAE',
        logoText: 'white',
        nextBtn: '#FF0000'
    },
    [ScreenName.skill]: {
        primary: 'white',
        secondary: '#0022FF',
        textPrimary: 'black',
        textSecondary: 'white',
        inactive: '#DCDCDC',
        logoBack: '#0022FF',
        logoText: 'white',
        nextBtn: '#0022FF',
        drawerBg: '#0022FF',
        drawerBtn: '#7fffb7'
    },
    [ScreenName.experience]: {
        primary: '#9FECFF',
        secondary: 'white',
        textPrimary: 'black',
        textSecondary: '#034150',
        inactive: 'white',
        logoBack: '#9FECFF',
        logoText: 'white',
        nextBtn: '#034150'
    },
    [ScreenName.project]: {
        primary: '#60026E',
        secondary: '#2f2f2f',
        textPrimary: 'rgb(211, 181, 255)',
        textSecondary: '#3acd4a',
        inactive: 'grey',
        logoBack: 'black',
        logoText: '#3acd4a',
        nextBtn: '#60026E'
    },
    [ScreenName.contact]: {
        primary: '#61B48B',
        secondary: 'transparent',
        textPrimary: 'black',
        textSecondary: '#46FFBB',
        inactive: 'white',
        logoBack: 'white',
        logoText: '#61B48B',
        nextBtn: '#61B48B'
    }
}

export const colors: ColorTheme = {
    1: darkColors,
    0: lightColors
}