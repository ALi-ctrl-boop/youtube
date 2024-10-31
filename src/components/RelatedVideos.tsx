import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { getVideos } from '../store/slice/sliceVideo'
import { CardRelated } from './CardRelated'

export const RelatedVideos = () => {
	const { videos, isLoading, error, searchQuery, sortBy } = useAppSelector(
		state => state.videos
	)
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		const categoryType = sortBy || '10'

		dispatch(getVideos({ searchQuery, sortBy: categoryType }))
	}, [dispatch, sortBy])

	if (isLoading) return <h1>Загрузка...</h1>

	if (error) return <h1>Ошибка: {error}</h1>
	return (
		<div className='h-screen overflow-scroll flex flex-col gap-2'>
			{videos.map(video => (
				<CardRelated key={video.id.videoId} {...video} />
			))}
		</div>
	)
}
