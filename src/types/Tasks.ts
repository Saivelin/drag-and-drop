import { User } from "./User"

export enum StatusEnum {
    Process="process",
    Completed="completed",
    Created="created"
}

export interface TaskType {
    id: number,
    title: string
    description?: string
    creator: User | number 
    creatorId?: number
    executors?: number[] | User[]
    deadline?: string
    status: StatusEnum
}

export interface TaskDto {
    title: string
    description?: string
    creator: number
    executors?: number[]
    deadline?: string
    status: StatusEnum
}