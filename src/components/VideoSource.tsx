import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAppDispatch } from '../hook/redux'
import { getId } from '../shared/utils/api/getId'
import { hanldeAddSub } from '../store/slice/sliceSub'
import { KEY_API } from '../store/slice/sliceVideo'
import { IChannelInfo, ISubs, IVideo } from '../types'
import { ModalWindows } from './ModalWindows'
import { VideoComment } from './VideoComment'

export const VideoSource = () => {
	const [videoId, setVideoId] = useState<IVideo | null>(null)
	const [showModalClip, setShowModalClip] = useState(false)
	const [showModalHref, setShowModalHref] = useState(false)
	const params = useParams()
	const [channelId, setChannelId] = useState('')
	const [channelInfo, setChannelInfo] = useState<IChannelInfo | null>(null)

	const dispatch = useAppDispatch()

	const getChannelId = async () => {
		try {
			const videoData = await getId(params.id)
			setVideoId(videoData)

			const channelId = videoData?.snippet?.channelId
			setChannelId(channelId)

			if (channelId) {
				const { data } = await axios.get(
					`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${KEY_API}`
				)
				setChannelInfo(data.items[0])
			}
		} catch (error) {
			console.error('Error fetching channel info:', error)
		}
	}

	const handleSubscription = () => {
		const object: ISubs = {
			id: videoId?.id.videoId,
			label: videoId?.snippet.channelTitle || '',
			icon: channelInfo?.snippet.thumbnails.default.url || '',
			href: `/channel/${channelId}`,
		}

		dispatch(hanldeAddSub(object))
	}

	useEffect(() => {
		getChannelId()
	}, [params.id])

	return (
		<>
			<ModalWindows
				showModalHref={showModalHref}
				setShowModalHref={setShowModalHref}
				showModalClip={showModalClip}
				setShowModalClip={setShowModalClip}
			/>
			<div className='w-[90%] lg:w-full'>
				{videoId && (
					<iframe
						src={`https://www.youtube.com/embed/${videoId.id}?autoplay=1&mute=1`}
						frameBorder='0'
						allow='autoplay; encrypted-media'
						allowFullScreen
						className='w-full h-[70%] rounded-xl object-cover xl:h-[500px]'
					/>
				)}
				<div className='mt-3'>
					<h3 className='text-white font-bold text-xl md:text-base'>
						{videoId?.snippet?.title || 'Заголовок недоступен'}
					</h3>

					<div className='flex items-center justify-between'>
						<div>
							<div className='flex items-center gap-4 mt-2'>
								<Link to={`/channel/${String(videoId?.id.videoId)}`}>
									<div className='space-x-2 flex '>
										<img
											src='https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle'
											className='w-12 h-12'
											alt='avatars'
										/>
										<h4 className='text-white'>
											{videoId?.snippet.channelTitle || 'Канал недоступен'}
										</h4>
									</div>
								</Link>

								<button
									className='text-black bg-white px-4 py-2 rounded-full transition duration-300 hover:bg-opacity-70'
									onClick={handleSubscription}
								>
									Подписаться
								</button>
							</div>
						</div>
						<div className='flex gap-2'>
							<button
								className='bg-[#222] px-3 py-2 rounded-full text-white transition duration-300 hover:bg-opacity-70 md:hidden'
								onClick={() => setShowModalHref(true)}
							>
								Поделиться
							</button>
							<button
								className='bg-[#222] px-3 py-2 rounded-full text-white transition duration-300 hover:bg-opacity-70 xl:hidden'
								onClick={() => setShowModalClip(true)}
							>
								Создать клип
							</button>
						</div>
					</div>
				</div>

				<VideoComment />
			</div>
			<ToastContainer />
		</>
	)
}
