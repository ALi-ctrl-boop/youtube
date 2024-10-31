import { FiSettings } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import {
	handleRemoveNotific,
	handleToggleNotification,
} from '../store/slice/sliceNotifications'
import { Modal } from './ui/modal/Modal'

export const Notifications = () => {
	const { notifications, isOpen } = useAppSelector(state => state.notific)
	const dispatch = useAppDispatch()

	return (
		<Modal
			isOpen={isOpen}
			onClick={() =>
				dispatch(handleToggleNotification({ modal: 'isOpen', isOpen: false }))
			}
		>
			<div
				className='fixed right-14 top-14 w-[480px] h-[560px] bg-[#222] rounded-xl'
				onClick={e => e.stopPropagation()}
			>
				<div className='flex items-center justify-between border-b border-[#383838] px-4 py-3'>
					<h3 className='text-white text-lg'>Уведомления</h3>
					<button>
						<FiSettings color='white' size={20} />
					</button>
				</div>
				{notifications.map(notific => (
					<div key={notific.id} className='flex items-end justify-between p-4'>
						<div>
							<h4 className='text-gray-600 text-lg'>{notific.title}</h4>
							<p className='text-gray-400 text-base'>{notific.description}</p>
						</div>
						<button
							className='text-black bg-white px-4 py-2 rounded-full transition duration-300 hover:bg-opacity-70'
							onClick={() => dispatch(handleRemoveNotific(notific.id))}
						>
							Отменить
						</button>
					</div>
				))}
			</div>
		</Modal>
	)
}
