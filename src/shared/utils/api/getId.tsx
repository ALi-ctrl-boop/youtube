import axios from 'axios'
import { KEY_API } from '../../../store/slice/sliceVideo'

export const getId = async (id: string | undefined) => {
	try {
		const { data } = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${KEY_API}&part=snippet`
		)
		return data.items[0]
	} catch (err) {
		console.error('Error fetching video ID:', err)
		return null
	}
}
