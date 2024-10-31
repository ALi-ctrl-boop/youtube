export const VideoComment = () => {
	return (
		<div className='mt-7'>
			<h2 className='text-white font-bold text-2xl'>9 комментариев</h2>
			<div className='flex items-center gap-3 mt-4'>
				<img
					src='https://yt3.googleusercontent.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s160-c-k-c0x00ffffff-no-r'
					alt='avatars'
					className='rounded-full w-12 h-12'
				/>
				<input
					type='text'
					placeholder='Введите комментарий'
					className='w-full bg-transparent border-b border-[#383838] text-white placeholder:text-[#383838] transition duration-300 focus:border-white outline-none'
				/>
			</div>
			<div className='mt-4'>
				<h3>Comments</h3>
			</div>
		</div>
	)
}
