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
    debug?: boolean,
    easing?: (t: number) => number
};

//* DEFAULTS 
// The default object options that get merged to user options
export const defaults = {
    speed: 75,
    direction: 'left',
    gap: 20,
    onHover: 'customSpeed',
    gradualHoverDuration: 600,
    speedFactor: 1,
    hoverSpeed: 15,
    stickyPosition: 'start',
    padding: { x: 20, y: 10 },
    debug: false,
    easing: quadInOut
};

//* HELPER FUNCTIONS
// Return false if option 'onHover' is set to 'stop'
export const hasHoverState = (mergedOptions: MarqueeckOptions) =>
    mergedOptions.onHover === 'stop' || mergedOptions.onHover === 'customSpeed' ? true : false;

// Define sticky element style position depending on stickyPosition options
export const stickyPos = (mergedOptions: MarqueeckOptions) =>
    mergedOptions.stickyPosition === 'start' ? 'left: 0;' : 'right: 0;';

// Simple 
export const setOpacity = (node: HTMLElement, value: number) =>
    node.style.opacity = value.toString();

export const debugState = (state: boolean) => state ? 'show-debug' : ""

