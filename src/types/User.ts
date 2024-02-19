export enum UserRoles  {
    Admin="admin",
    Developer="developer",
    Moderator="moderator"
}

export interface User {
    id: number
    name: string
    role: UserRoles
}