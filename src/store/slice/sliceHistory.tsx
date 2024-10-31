import { createSlice } from '@reduxjs/toolkit'
import { IHistory } from '../../types'

type IState = {
	history: IHistory[]
}

const initialState: IState = {
	history: [],
}

export const sliceHistory = createSlice({
	name: 'history',
	initialState,
	reducers: {
		handleAddHistory: (state, action) => {
			state.history.push(action.payload)
		},
		handleDeleteHistory: (state, action) => {
			state.history = state.history.filter(hist => hist.id !== action.payload)
		},
	},
})

export const { handleAddHistory, handleDeleteHistory } = sliceHistory.actions
export default sliceHistory.reducer
