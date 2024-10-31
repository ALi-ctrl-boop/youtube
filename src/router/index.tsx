import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { History } from '../pages/History'
import { Home } from '../pages/Home'
import { ItemInfo } from '../pages/ItemInfo'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'item/:id',
				element: <ItemInfo />,
			},
			{
				path: '/history',
				element: <History />,
			},
			{
				path: '/playlists',
				element: (
					<div className='w-full h-screen flex items-center justify-center'>
						<h1 className='text-white text-2xl'>Пусто</h1>
					</div>
				),
			},
			{
				path: '/videos',
				element: (
					<div className='w-full h-screen flex items-center justify-center'>
						<h1 className='text-white text-2xl'>
							Ещё не был добавлен функционал
						</h1>
					</div>
				),
			},
			{
				path: '/liked',
				element: (
					<div className='w-full h-screen flex items-center justify-center'>
						<h1 className='text-white text-2xl'>
							Ещё не был добавлен функционал
						</h1>
					</div>
				),
			},
		],
	},
])
