import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch } from '../hook/redux'
import { handleAddHistory } from '../store/slice/sliceHistory'

interface ICard {
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
}

export const Card = ({ id, snippet }: ICard) => {
	const [videoId, setVideoId] = useState<string | null>(null)
	const [isVisiblePlayerVideo, setVisiblePlayerVideo] = useState(false)
	const params = useParams()
	const dispatch = useAppDispatch()

	const getVideoId = async () => {
		try {
			if (!params.id) return
			const { data } = await axios.get(
				`https://www.googleapis.com/youtube/v3/videos?id=${params.id}&key=AIzaSyBc2oFPtx5mdmeiCOagaJXUqnSoN4O907o&part=snippet`
			)

			if (data.items.length > 0) {
				return setVideoId(data.items[0].id)
			}
		} catch (err) {
			console.error('Error fetching video ID:', err)
			return null
		}
	}

	useEffect(() => {
		getVideoId()
	}, [params.id])

	const formatPublishedDate = (date: string | undefined) => {
		if (!date) return
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
		}
		return new Date(date).toLocaleDateString('ru-RU', options)
	}

	const addHistory = () => {
		const history = {
			id: {
				videoId: id.videoId,
			},
			snippet: {
				channelTitle: snippet.channelTitle,
				description: snippet.description,
				title: snippet.title,
				thumbnail: snippet.thumbnails.medium.url,
				publishedAt: formatPublishedDate(snippet.publishedAt),
				thumbnails: {
					medium: {
						url: snippet.thumbnails.medium.url,
					},
				},
			},
		}

		dispatch(handleAddHistory(history))
	}

	return (
		<Link to={`item/${id.videoId}`} onClick={addHistory}>
			<article
				className='cursor-pointer relative'
				onMouseEnter={() => setVisiblePlayerVideo(true)}
				onMouseLeave={() => setVisiblePlayerVideo(false)}
			>
				<img
					src={snippet.thumbnails.medium.url}
					className={`w-full h-44 transition-[border-radius] duration-200   ${
						isVisiblePlayerVideo ? 'rounded-none' : 'rounded-xl'
					}`}
					alt='Video'
				/>
				<div className='w-full flex mt-3 gap-2'>
					<img
						src='https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle'
						className='w-10 h-10'
						alt='avatars'
					/>
					{isVisiblePlayerVideo && videoId && (
						<iframe
							width='100%'
							height='100%'
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
							frameBorder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
							className={`absolute inset-0 transition-opacity duration-200 ${
								isVisiblePlayerVideo ? 'opacity-100' : 'opacity-0'
							}`}
							style={{ pointerEvents: 'none' }}
						/>
					)}
					<div className='flex flex-col'>
						<h3 className='text-white'>
							{snippet.title?.length > 60
								? `${snippet.title.substring(60, 0)}...`
								: snippet.title}
						</h3>
						<span className='text-[#868686] text-sm md:text-xs'>
							{snippet.channelTitle}
						</span>
						<span className='text-[#868686] text-sm md:text-xs'>
							Updated: {formatPublishedDate(snippet.publishedAt)} дня назад
						</span>
					</div>
				</div>
			</article>
		</Link>
	)
}
