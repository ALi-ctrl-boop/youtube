import { RelatedVideos } from '../components/RelatedVideos'
import { VideoSource } from '../components/VideoSource'

export const ItemInfo = () => {
	return (
		<div className='w-full px-10 flex gap-5 mt-4 lg:flex-col lg:px-0'>
			<VideoSource />
			<RelatedVideos />
		</div>
	)
}
