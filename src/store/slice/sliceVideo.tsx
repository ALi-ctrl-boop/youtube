import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IVideo } from '../../types'

export const URL = 'https://youtube.googleapis.com/youtube/v3/'
export const KEY_API = 'AIzaSyCx1MWM5TmRcaNLHrOgVy8IqjHSgpzkZRg'

type IState = {
	videos: IVideo[]
	isLoading: boolean
	error: null | string
	searchQuery: string
	isOpenSideber: boolean
	isOpenHeader: boolean
	sortBy?: string
}

const initialState: IState = {
	videos: [],
	isLoading: false,
	error: null,
	searchQuery: '',
	isOpenSideber: false,
	isOpenHeader: false,
	sortBy: '',
}

export const getVideos = createAsyncThunk(
	'videos/getVideos',
	async ({
		searchQuery,
		sortBy,
	}: {
		searchQuery: string
		sortBy?: string | undefined
	}) => {
		const { data } = await axios.get(
			`${URL}search?part=snippet&type=video&q=${encodeURIComponent(
				searchQuery
			)}&maxResults=50&videoCategoryId=${sortBy}&key=${KEY_API}`
		)
		return data.items
	}
)

const sliceVideo = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload
		},

		toggleSidebar: state => {
			state.isOpenSideber = !state.isOpenSideber
		},

		setSortBy: (state, action) => {
			state.sortBy = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getVideos.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(getVideos.fulfilled, (state, action) => {
				state.isLoading = false
				state.videos = action.payload
			})
			.addCase(getVideos.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message || 'Error Fetching videos'
			})
	},
})

export const { setSearchQuery, toggleSidebar, setSortBy } = sliceVideo.actions
export default sliceVideo.reducer
