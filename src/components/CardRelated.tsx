import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ICardRelated {
	id: {
		videoId: string
	}
	snippet: {
		channelTitle?: string
		description?: string
		publishedAt?: string
		title: string
		thumbnails: {
			medium: {
				url?: string
			}
		}
	}
	sx?: string
}

export const CardRelated = ({ id, snippet, sx }: ICardRelated) => {
	const [isVisibleVideoContent, setVisibleVideoContent] = useState(false)
	return (
		<Link to={`/item/${id.videoId}`}>
			<div
				className={`relative w-[350px] cursor-pointer ${sx}`}
				onMouseEnter={() => setVisibleVideoContent(true)}
				onMouseLeave={() => setVisibleVideoContent(false)}
			>
				<div className='w-full flex gap-2'>
					<img
						src={snippet.thumbnails.medium.url}
						className={`w-44 h-28 object-cover rounded-xl ${
							isVisibleVideoContent ? 'rounded-none' : 'rounded-xl'
						}`}
						alt='video images'
					/>
					<div className='w-[300px] mt-2 space-y-1 lg:w-full'>
						<h3 className='text-white text-sm'>
							{snippet.title.substring(0, 60)}
						</h3>
						<p className='text-xs text-gray-400'>
							{snippet?.description && snippet?.description?.length > 60
								? `${snippet?.description.substring(60, 0)}...`
								: snippet.description}
						</p>
						<span className='text-xs text-gray-400'>23 тыс. просмотров</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
