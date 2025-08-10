import type { Snippet } from 'svelte';

export interface BaseProps {
	class?: string;
	children?: Snippet;
}

export interface ComponentProps extends BaseProps {
	[key: string]: any;
}

export interface BannerProps extends BaseProps {
	label?: string;
	description?: string;
	banner?: string;
	h1?: boolean;
}

export interface HeaderProps extends BaseProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ContentProps extends BaseProps {
}
