import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { getVideos } from '../store/slice/sliceVideo'
import { Card } from './Card'

export const YoutubeList = () => {
	const { videos, isLoading, error, searchQuery, sortBy } = useAppSelector(
		state => state.videos
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const categoryType = sortBy || '10'

		dispatch(getVideos({ searchQuery, sortBy: categoryType }))
	}, [dispatch, sortBy])

	if (isLoading) return <h1 className='text-white'>Загрузка...</h1>

	if (error) return <h1 className='text-white'>Ошибка: {error}</h1>

	return (
		<main className='w-full mt-2'>
			<section className='w-full overflow-hidden grid gap-2 gap-y-4 grid-cols-[repeat(auto-fill,minmax(310px,1fr))]'>
				{videos.map(video => (
					<Card key={video.id.videoId} {...video} />
				))}
			</section>
		</main>
	)
}
