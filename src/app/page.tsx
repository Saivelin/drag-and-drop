"use client"

import MainModule from '@/modules/MainModule/MainModule'
import { setTasksRefetch } from '@/redux/reducers/tasks'
import { useGetAllTasksQuery } from '@/redux/services/taskApi'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
    const {data: tasks, refetch: tasksRefetch} = useGetAllTasksQuery()

    if(tasks){
        return <MainModule tasksData={tasks} tasksRefetch={tasksRefetch}/>
    }
    else{
        return <></>
    }
}
