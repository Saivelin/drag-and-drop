import { UserDto, User } from '@/types/User'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3005/api'
    }),
    endpoints: builder => ({
        getUser: builder.query<User, { id: number }>({
            query: id => ({ url: `/user/${id}` })
        }),
        getAllUsers: builder.query<User[], void>({
            query: () => ({ url: '/user' })
        }),
        createUser: builder.mutation<any, UserDto>({
            query: (data) => ({ url: `/user`, method: "POST", body: data }),
        }),
        updateUser: builder.mutation<any, any>({
            query: data => ({ url: `/user/${data.id}`, method: 'PATCH', body: data })
        }),
        deleteUsersByIds: builder.mutation<any, any>({
            query: (data) => ({ url: `/user/delete-by-ids`, method: "POST", body: data }),
        }),
    })
})

export const { useGetUserQuery, useGetAllUsersQuery, useCreateUserMutation, useDeleteUsersByIdsMutation, useUpdateUserMutation } = userApi
