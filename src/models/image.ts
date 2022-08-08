import { StaticImageData } from "next/image"

export interface Image {
	src: string
	alt: string
	width: number
	height: number
}

export interface Image11 {
	src: StaticImageData
	alt: string
	width: number
	height: number
}

export interface Shape {
	firstRadius?: number
	tl?: number
	tr?: number
	br?: number
	bl?: number
}

export interface ImageShape extends Image, Shape {}

export interface Image11Shape extends Image11, Shape {}
