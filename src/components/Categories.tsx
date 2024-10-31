import { useState } from 'react'
import { useAppDispatch } from '../hook/redux'
import { VIDEO_CATEGORIES } from '../shared/constant'
import { setSortBy } from '../store/slice/sliceVideo'

export const Categories = () => {
	const [isActiveCategory, setActiveCategory] = useState(0)
	const dispatch = useAppDispatch()

	const handleActiveCategory = (index: number, type: string) => {
		setActiveCategory(index)
		dispatch(setSortBy(type))
	}
	return (
		<div className='w-full overflow-hidden px-4'>
			<div className='w-full flex gap-3 overflow-x-scroll'>
				{VIDEO_CATEGORIES.map((cat, i) => (
					<button
						key={i}
						className={`px-4 py-[5px] flex items-center justify-center border-none bg-[#222222] rounded-lg text-base transition duration-300 hover:bg-opacity-50 flex-shrink-0 ${
							isActiveCategory === i ? 'bg-white text-black' : 'text-white'
						}`}
						onClick={() => handleActiveCategory(i, cat.type ?? '')}
					>
						{cat.label}
					</button>
				))}
			</div>
		</div>
	)
}
