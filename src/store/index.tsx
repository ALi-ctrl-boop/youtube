import { configureStore } from '@reduxjs/toolkit'
import history from './slice/sliceHistory'
import notific from './slice/sliceNotifications'
import subs from './slice/sliceSub'
import videos from './slice/sliceVideo'

export const store = configureStore({
	reducer: {
		videos,
		subs,
		notific,
		history,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
