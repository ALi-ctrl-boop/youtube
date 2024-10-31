export type IVideo = {
	id: {
		videoId: string
	}
	snippet: {
		channelTitle?: string
		description?: string
		publishedAt?: string
		title: string
		thumbnails: {
			medium: {
				url?: string
			}
		}
	}
}

export type ISubs = {
	id: number | string | undefined
	label: string
	icon: string
	href: string
}

export type INotification = {
	id: number
	title: string
	description: string
}

export type IHistory = {
	id: {	
		videoId: string
	}
	snippet: {
		channelTitle?: string
		description?: string
		publishedAt?: string
		title: string
		thumbnails: {
			medium: {
				url?: string
			}
		}
	}
}
