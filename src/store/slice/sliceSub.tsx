import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISubs } from '../../types'

type IState = {
	subs: ISubs[]
}

const initialState: IState = {
	subs: [],
}

const sliceSub = createSlice({
	name: 'sub',
	initialState,
	reducers: {
		hanldeAddSub: (state, action: PayloadAction<ISubs>) => {
			const { id } = action.payload
			const find = state.subs.find(s => s.id === id)
			if (!find) {
				state.subs.push(action.payload)
			} else {
				console.log('Already subscribed')
			}
		},
		handleRemoveSub: (state, action: PayloadAction<ISubs['id']>) => {
			state.subs = state.subs.filter(s => s.id === action.payload)
		},
	},
})

export const { hanldeAddSub, handleRemoveSub } = sliceSub.actions
export default sliceSub.reducer
