import { IconType } from 'react-icons'

export interface INavigationLinks {
	title: string
	links: {
		label: string
		icon: IconType | string
		type: string
		href: string
	}[]
}

export interface ICategoriesSmall {
	label: string
	icon: IconType | string
	type: string
	href: string
}

export interface ICategories {
	label: string
	type?: string | undefined
}
