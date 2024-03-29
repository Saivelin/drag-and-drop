import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from './services/taskApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './services/userApi'
import tasksReducer from "./reducers/tasks"
import popupReducer from "./reducers/popup"

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        tasksReducer: tasksReducer,
        popupReducer: popupReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([taskApi.middleware, userApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
