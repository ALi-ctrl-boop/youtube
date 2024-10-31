import { useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import {
	IoMenuOutline,
	IoSearchOutline,
	IoVideocamOutline,
} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { handleToggleNotification } from '../store/slice/sliceNotifications'
import {
	getVideos,
	setSearchQuery,
	toggleSidebar,
} from '../store/slice/sliceVideo'

export const Header = () => {
	const { searchQuery, sortBy } = useAppSelector(state => state.videos)
	const dispatch = useAppDispatch()
	const [isShowSearch, setShowSearch] = useState(false)
	const navigation = useNavigate()

	const handleSearch = () => {
		dispatch(getVideos({ searchQuery, sortBy }))
		navigation('/')
	}

	const onMouseEnter: React.KeyboardEventHandler<HTMLInputElement> = event => {
		if (event.key === 'Enter') {
			handleSearch()
			navigation('/')
		}
	}
	return (
		<header
			className='w-full flex items-center justify-between py-2'
			onClick={() => setShowSearch(true)}
		>
			<div
				className={`flex gap-4 items-center ${isShowSearch ? 'md:hidden' : ''}`}
			>
				<button
					className='text-xl p-1 rounded-full transition duration-300 bg-[#0f0f0f] hover:bg-[#222]'
					onClick={() => dispatch(toggleSidebar())}
				>
					<IoMenuOutline size={25} color='white' />
				</button>
				<Link to={'/'}>
					<h2 className='flex items-center gap-1 text-xl text-white'>
						<img
							src='/public/logo.svg'
							className='w-8 h-8'
							alt='youtube image'
						/>
						YouTube
					</h2>
				</Link>
			</div>

			<div className='flex items-center' onClick={e => e.stopPropagation()}>
				<input
					type='search'
					placeholder='Введите запрос'
					value={searchQuery}
					onChange={e => dispatch(setSearchQuery(e.target.value))}
					className={`w-[600px] border border-[#222222] py-2 px-4 rounded-l-full bg-transparent outline-none text-white lg:w-[80%] md:h-10 z-10 md:absolute top-0 left-0 md:mt-2 lg:rounded-lg md:ml-4 ${
						isShowSearch ? 'md:translate-x-[0]' : 'md:translate-x-[-150%]'
					}`}
					onKeyDown={onMouseEnter}
				/>
				<button
					className='bg-[#222222] rounded-r-full py-[11px] px-3 text-white md:hidden'
					onClick={handleSearch}
				>
					<IoSearchOutline size={20} />
				</button>
			</div>
			<div className='relative z-20 flex items-center gap-4'>
				<button
					className='p-2 rounded-full text-white transition duration-300 bg-[#0f0f0f] hover:bg-[#222] hidden md:block'
					onClick={() => setShowSearch(false)}
				>
					<IoSearchOutline size={20} />
				</button>
				<button
					className={`p-2 rounded-full text-white transition duration-300 bg-[#0f0f0f] hover:bg-[#222] ${
						isShowSearch ? 'md:hidden' : ''
					}`}
				>
					<IoVideocamOutline size={20} />
				</button>
				<button
					className={`p-2 rounded-full text-white transition duration-300 bg-[#0f0f0f] hover:bg-[#222] cursor-pointer ${
						isShowSearch ? 'md:hidden' : ''
					}`}
					onClick={() =>
						dispatch(
							handleToggleNotification({ modal: 'isOpen', isOpen: true })
						)
					}
				>
					<FaRegBell size={20} />
				</button>
			</div>
		</header>
	)
}
