import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hook/redux'
import { CATEGORIES } from '../shared/constant'

interface ISidebarCategory {
	link: {
		icon: IconType | string
		href: string
		label: string
	}
}

export const Sidebar = () => {
	const { subs } = useAppSelector(state => state.subs)
	const { isOpenSideber } = useAppSelector(state => state.videos)
	return (
		<>
			<aside
				className={`h-screen px-2 duration-300 transition-transform
					xl:absolute xl:bg-[#0f0f0f] z-10 ${
						isOpenSideber
							? 'w-[0px] -translate-x-[100vw]'
							: 'w-[212px] translate-x-[0]'
					}`}
			>
				{CATEGORIES.map((categ, i) => (
					<div key={i} className='mb-4'>
						<h2 className='text-white font-bold text-base mb-2'>
							{categ.title}
						</h2>
						{categ.links.map((link, i) => (
							<nav key={i}>
								<Link to={link.href}>
									<SidebarLink link={link} />
								</Link>
							</nav>
						))}
						<hr className='border-b-1 border-[#383838] w-full mt-2' />
					</div>
				))}
				<div className='mb-4'>
					<h2 className='text-white font-bold text-base mb-2'>Подписки</h2>
					{subs.map((link, i) => (
						<nav key={i}>
							<Link to={`channel/${link.id}`}>
								<SidebarLink link={link} />
							</Link>
						</nav>
					))}
					<hr className='border-b-1 border-[#222] w-full mt-2' />
				</div>
			</aside>
		</>
	)
}

const SidebarLink = ({ link }: ISidebarCategory) => (
	<button
		className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-[background-color] duration-200 hover:bg-[#222]`}
	>
		<span>
			{typeof link.icon === 'string' ? (
				<img
					src={link.icon}
					alt='img'
					className='w-5 h-5 rounded-full object-cover'
				/>
			) : (
				<link.icon color='white' size={20} />
			)}
		</span>
		<span className='text-sm text-white'>{link.label}</span>
	</button>
)
