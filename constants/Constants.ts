import user_information from '../data/information.json'
import worksheets_information from '../data/worksheets.json'


export type UserInformation = {
    user: string, 
    problemsSolved: number,
}

export type Topic = {
    name: string,
    levels: Level[]
}

export type Level = {
    name: string,
    minNumber: number, 
    maxNumber: number,
}

export const USERINFO: UserInformation = user_information as UserInformation

export const TOPICS: Topic[] = worksheets_information.topics as Topic[]


