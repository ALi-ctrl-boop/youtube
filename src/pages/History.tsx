import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { handleDeleteHistory } from '../store/slice/sliceHistory'

export const History = () => {
	const { history } = useAppSelector(state => state.history)
	const dispatch = useAppDispatch()
	return (
		<div className='w-full p-5'>
			<h1 className='text-3xl text-white font-bold'>История просмотра</h1>
			<div className='h-screen overflow-scroll flex flex-col gap-5 mt-4'>
				{history.length > 0 ? (
					history.map(history => (
						<div key={history.id.videoId} className={`relative w-3/5 cursor-pointer `}>
							<Link to={`/item/${history.id.videoId}`}>
								<div className='w-full flex gap-2'>
									<img
										src={history.snippet.thumbnails.medium.url}
										className={`w-72 h-54 object-cover rounded-xl`}
										alt='video images'
									/>
									<div className='w-full mt-2 space-y-1 lg:w-full'>
										<h3 className='text-white text-xl'>
											{history.snippet.title.substring(0, 60)}
										</h3>
										<p className='text-base text-gray-400'>
											{history.snippet?.description &&
											history.snippet?.description?.length > 60
												? `${history.snippet?.description.substring(60, 0)}...`
												: history.snippet.description}
										</p>
										<span className='text-base text-gray-400'>
											23 тыс. просмотров
										</span>
									</div>
								</div>
							</Link>
							<button
								className='absolute top-0 right-0'
								onClick={() =>
									dispatch(handleDeleteHistory(history.id.videoId))
								}
							>
								<IoMdClose color='white' size={24} />
							</button>
						</div>
					))
				) : (
					<h2 className=' text-white text-2xl text-center'>Пусто</h2>
				)}
			</div>
		</div>
	)
}
