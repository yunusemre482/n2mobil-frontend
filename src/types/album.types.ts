
export type Album = {
	userId: number
	id: number
	title: string
}

export type Photo = {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export type State = {
    albums: Album[]
    album: Album | null
    photos: Photo[]
	error: string | null
	loading: boolean
}
