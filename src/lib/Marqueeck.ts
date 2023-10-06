import { quadInOut } from 'svelte/easing';

//* TYPE DEFINITIONS
export type TranslateOptions = {
    initialPosition: number;
    options: MarqueeckOptions;
    isMouseIn: () => boolean;
    currentSpeed: () => number;
};

export type MarqueeckOptions = {
    speed?: number;
    direction?: 'left' | 'right';
    gap?: number;
    onHover?: 'none' | 'stop' | 'customSpeed';
    speedFactor?: number;
    gradualHoverDuration?: number;
    hoverSpeed?: number;
    stickyPosition?: 'start' | 'end';
    padding?: { x: number; y: number };
    staggerChild?: boolean,
    staggerDuration?: number,
    debug?: boolean,
    easing?: (t: number) => number
};

type MustMarqueeckOptions = {
    [K in keyof MarqueeckOptions]-?: MarqueeckOptions[K];
};

//* DEFAULTS 
// The default object options that get merged to user options
export const defaults: MustMarqueeckOptions = {
    speed: 75,
    direction: 'left',
    gap: 20,
    onHover: 'customSpeed',
    gradualHoverDuration: 1000,
    speedFactor: 1,
    hoverSpeed: 15,
    stickyPosition: 'start',
    padding: { x: 20, y: 10 },
    staggerChild: true,
    staggerDuration: 50,
    debug: false,
    easing: quadInOut
};

//* HELPER FUNCTIONS
// Return false if option 'onHover' is set to 'stop'
export const hasHoverState = (options: MarqueeckOptions) =>
    options.onHover === 'stop' || options.onHover === 'customSpeed' ? true : false;

// Define sticky element style position depending on stickyPosition options
export const stickyPos = (options: MarqueeckOptions) =>
    options.stickyPosition === 'start' ? 'left: 0;' : 'right: 0;';

// Simple 
export const setOpacity = (node: HTMLElement, value: number) =>
    node.style.opacity = value.toString();

export const debugState = (state: boolean) => state ? 'show-debug' : ""

