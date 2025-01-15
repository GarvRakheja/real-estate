import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from './projectApiSlice';
// import { projectApi } from '../features/projects/projectApiSlice';

export const store = configureStore({
    reducer: {
        [projectApi.reducerPath]: projectApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(projectApi.middleware),
});