import React from 'react'

interface IModal {
	children: React.ReactNode
	isOpen?: boolean
	onClick?: () => void
}

export const Modal = ({ children, isOpen, onClick }: IModal) => {
	return (
		<div
			onClick={onClick}
			className={`fixed w-full h-full inset-0 flex items-center justify-center transition-opacity duration-300 ${
				!isOpen ? 'opacity-0 hidden' : 'opacity-100 block z-20'
			}`}
		>
			{children}
		</div>
	)
}
