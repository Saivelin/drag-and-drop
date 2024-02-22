import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from './services/taskApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([taskApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
