import user_information from '../data/information.json'
import worksheets_information from '../data/worksheets.json'


type UserInformation = {
    user: string, 
    problemsSolved: number,
}

type Topic = {
    topic: string,
}

export const USERINFO: UserInformation = user_information as UserInformation

export const TOPICS: string[] = worksheets_information.topics as string[]


