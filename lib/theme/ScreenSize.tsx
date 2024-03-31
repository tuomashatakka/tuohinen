

export enum ScreenSize { nil, xs, sm, md, lg, xl }

export type ScreenSizeIdentifier = keyof typeof ScreenSize

export const SCREEN_SIZES: Array<ScreenSizeIdentifier> = [ 'nil', 'xs', 'sm', 'md', 'lg', 'xl' ]
