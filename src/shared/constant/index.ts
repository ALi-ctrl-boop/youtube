import { AiFillHome } from 'react-icons/ai'
import { BiSolidVideos } from 'react-icons/bi'
import { CgPlayListSearch } from 'react-icons/cg'
import { FaHistory } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { ICategories, ICategoriesSmall, INavigationLinks } from '../interface'

export const CATEGORIES: INavigationLinks[] = [
	{
		title: '',
		links: [
			{ label: 'Главная', icon: AiFillHome, type: 'home', href: '/' },
			{ label: 'Shorts', icon: SiYoutubeshorts, type: 'home', href: '/' },
			{
				label: 'Подписка',
				icon: MdOutlineSubscriptions,
				type: 'home',
				href: '/',
			},
		],
	},
	{
		title: 'Вы',
		links: [
			{ label: 'История', icon: FaHistory, type: 'home', href: '/history' },
			{
				label: 'Плейлисты',
				icon: CgPlayListSearch,
				type: 'home',
				href: '/playlists',
			},
			{
				label: 'Ваши видео',
				icon: BiSolidVideos,
				type: 'home',
				href: '/videos',
			},
			{
				label: 'Понравившиеся',
				icon: IoTimeOutline,
				type: 'home',
				href: '/liked',
			},
		],
	},
]

export const CATEGORIES_SMALL: ICategoriesSmall[] = [
	{ label: 'Главная', icon: AiFillHome, type: 'home', href: '/' },
	{ label: 'Shorts', icon: SiYoutubeshorts, type: 'home', href: '/' },
	{
		label: 'Подписка',
		icon: MdOutlineSubscriptions,
		type: 'home',
		href: '/',
	},
]

export const VIDEO_CATEGORIES: ICategories[] = [
	{ label: 'Все' },
	{ label: 'Комедия', type: '23' },
	{ label: 'Автомобили и транспортные средства', type: '2' },
	{ label: 'Музыка', type: '10' },
	{ label: 'Развлечения', type: '24' },
	{ label: 'Видеоигры', type: '20' },
	{ label: 'Шоу', type: '43' },
	{ label: 'Семья', type: '37' },
	{ label: 'Новости и политика', type: '25' },
	{ label: 'Спорт', type: '17' },
	{ label: 'Путешествия и события', type: '19' },
]

export const subscriptions = [
	{
		channelName: 'Fireship',
		id: 'Fireship',
		imgUrl:
			'https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj',
	},
	{
		channelName: 'Caleb Curry',
		id: 'CalebCurry',
		imgUrl:
			'https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj',
	},
	{
		channelName: 'Web Dev Simplified',
		id: 'WebDevSimplified',
		imgUrl:
			'https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj',
	},
	{
		channelName: 'Kevin Powell',
		id: 'KevinPowell',
		imgUrl:
			'https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj',
	},
	{
		channelName: 'Sonny Sangha',
		id: 'SonnySangha',
		imgUrl:
			'https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj',
	},
	{
		channelName: 'Traversy Media',
		id: 'TraversyMedia',
		imgUrl:
			'https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo',
	},
]

export const playlists = [
	{ id: '1', name: 'Frontend & Backend' },
	{ id: '2', name: 'Favorites' },
	{ id: '3', name: 'React' },
	{ id: '4', name: 'Non-Dev' },
	{ id: '5', name: 'TypeScript' },
]
