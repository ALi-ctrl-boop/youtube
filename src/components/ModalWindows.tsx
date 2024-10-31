import { toast } from 'react-toastify'
import { Modal } from './ui/modal/Modal'
import 'react-toastify/dist/ReactToastify.css';

interface IModalWindows {
	showModalClip: boolean
	setShowModalClip: (value: boolean) => void
	showModalHref: boolean
	setShowModalHref: (value: boolean) => void
}

export const ModalWindows = ({
	showModalHref,
	setShowModalHref,
	showModalClip,
	setShowModalClip,
}: IModalWindows) => {
	const notify = () => toast.success('Скопировано', {
		autoClose: 2000,
	})

	const href = window.location.href
	const handleCopyHref = () => {
		navigator.clipboard.writeText(href)
		notify()
	}

	const handleShowModal = () => {
		setShowModalHref(false)
	}
	return (
		<div>
			<Modal isOpen={showModalHref}>
				<div
					className='fixed w-[480px] h-auto bg-[#222] rounded-xl p-6'
					onClick={e => e.stopPropagation()}
				>
					<h3 className='text-white mb-4'>Создайте канал</h3>
					<input
						type='text'
						placeholder={href}
						className='w-full border border-[#383838] bg-black py-2 px-4 rounded-lg'
						onFocus={handleCopyHref}
					/>
					<div className='flex justify-end mt-5'>
						<button
							className='bg-transparent outline-none text-white'
							onClick={handleShowModal}
						>
							Отмена
						</button>
					</div>
				</div>
			</Modal>

			<Modal isOpen={showModalClip} onClick={() => setShowModalClip(false)}>
				<div
					className='fixed w-[480px] h-auto bg-[#222] rounded-xl p-6'
					onClick={e => e.stopPropagation()}
				>
					<h3 className='text-white mb-4'>Создайте канал</h3>
					<p className='text-[#777] mb-4'>
						Чтобы добавить клип, нужно сначала создать канал.
					</p>
					<div className='flex justify-end'>
						<button
							className='bg-transparent outline-none text-white'
							onClick={() => setShowModalClip(false)}
						>
							Отмена
						</button>
					</div>
				</div>
			</Modal>
		</div>
	)
}
