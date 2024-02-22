import { TaskDto, TaskType } from '@/types/Tasks'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3005/api'
    }),
    endpoints: builder => ({
        getTask: builder.query<TaskType, { id: number }>({
            query: id => ({ url: `/task/${id}` })
        }),
        getAllTasks: builder.query<TaskType[], void>({
            query: () => ({ url: '/task' })
        }),
        createTask: builder.mutation<any, TaskDto>({
            query: (data) => ({ url: `/task`, method: "POST", body: data }),
        }),
        updateTask: builder.mutation<any, any>({
            query: data => ({ url: `/task/${data.id}`, method: 'PATCH', body: data })
        }),
        deleteTasksByIds: builder.mutation<any, any>({
            query: (data) => ({ url: `/task/delete-by-ids`, method: "POST", body: data }),
        }),
    })
})

export const { useGetTaskQuery, useGetAllTasksQuery, useCreateTaskMutation, useDeleteTasksByIdsMutation, useUpdateTaskMutation } = taskApi
