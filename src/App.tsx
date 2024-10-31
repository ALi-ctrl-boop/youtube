import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Notifications } from './components/Notifications'
import { Sidebar } from './components/Sidebar'

const App = () => {
	return (
		<div className='px-4'>
			<Header />
			<Notifications />
			<main className='flex'>
				<Sidebar />
				<Outlet />
			</main>
		</div>
	)
}

export default App
