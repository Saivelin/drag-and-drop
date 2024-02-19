export enum StatusEnum {
    Process="process",
    Completed="completed",
    Created="created"
}

export interface TaskType {
    id: number,
    title: string,
    description: string
    status: StatusEnum
}