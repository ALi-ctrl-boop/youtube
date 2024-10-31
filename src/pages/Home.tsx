import { Categories } from '../components/Categories'
import { YoutubeList } from '../components/YoutubeList'

export const Home = () => {
	return (
		<div className='w-full flex flex-col mt-2 '>
			<Categories />
			<YoutubeList />
		</div>
	)
}
