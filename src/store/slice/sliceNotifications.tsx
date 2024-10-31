import { createSlice } from '@reduxjs/toolkit'
import { INotification } from '../../types'

type IState = {
	notifications: INotification[]
	isOpen: boolean
}

const initialState: IState = {
	notifications: [
		{
			id: 12,
			title: 'Заголовок уведомления 1',
			description: 'Текст уведомления 1',
		},
	],
	isOpen: false,
}

const sliceNotifications = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		handleRemoveNotific: (state, action) => {
			state.notifications = state.notifications.filter(
				notification => notification.id !== action.payload
			)
		},
		handleToggleNotification: (state, action) => {
			const { modal, isOpen } = action.payload
			if (modal in state) {
				state[modal as keyof typeof state] = isOpen
			} else {
				console.log('...')
			}
		},
	},
})

export const { handleRemoveNotific, handleToggleNotification } =
	sliceNotifications.actions
export default sliceNotifications.reducer
