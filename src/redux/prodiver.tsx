'use client'

import { PropsWithChildren, useEffect } from 'react'

import ReduxProvider from './redux-provider'

export default function Providers({ children, csrf }: PropsWithChildren<any>) {

    useEffect(() => { //FIX Поместил код в useEffect
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `csrf=${csrf};expires=${expires};path=/`
    }, [])

    return <ReduxProvider>{children}</ReduxProvider>
}
