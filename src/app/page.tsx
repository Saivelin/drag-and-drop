"use client"

import MainModule from '@/modules/MainModule/MainModule'
import { useGetAllTasksQuery } from '@/redux/services/taskApi'

export default function Home() {
    const {data: tasks, refetch: tasksRefetch} = useGetAllTasksQuery()

    if(tasks){
        return <MainModule tasksData={tasks} tasksRefetch={tasksRefetch}/>
    }
    else{
        return <></>
    }
}
