import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

const persistedTasksReducer = persistReducer(
    {
        key: "tasks",
        storage,
        whitelist: ["items"],
    },
    tasksReducer
);

const persistedFiltersReducer = persistReducer(
    {
        key: "filters",
        storage,
    },
    filtersReducer
);

export const store = configureStore({
    reducer: {
        tasks: persistedTasksReducer,
        filters: persistedFiltersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

