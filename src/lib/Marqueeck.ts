import type { FadeParams, TransitionConfig } from 'svelte/transition';
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

//* TYPE DEFINITIONS
export type TranslateOptions = {
    initialPosition: number;
    options: MarqueeckOptions;
    isMouseIn: () => boolean;
    currentSpeed: () => number;
};

type SvelteTransition = (node: HTMLElement, params?: TransitionConfig) => any

export type MarqueeckOptions = {
    speed?: number;
    direction?: 'left' | 'right';
    gap?: number;
    onHover?: 'none' | 'stop' | 'customSpeed';
    speedFactor?: number;
    brakeDuration?: number;
    hoverSpeed?: number;
    stickyPosition?: 'start' | 'end';
    padding?: { x: number; y: number };
    childTransition?: SvelteTransition;
    childStagger?: boolean,
    childStaggerDuration?: number,
    debug?: boolean,
    easing?: (t: number) => number,
};

type Mandatory<T> = {
    [K in keyof T]-?: T[K];
};

//* DEFAULTS 
// The default object options that get merged to user options
export const defaults: Mandatory<MarqueeckOptions> = {
    speed: 75,
    direction: 'left',
    gap: 20,
    onHover: 'customSpeed',
    brakeDuration: 1000,
    speedFactor: 1,
    hoverSpeed: 15,
    stickyPosition: 'start',
    padding: { x: 20, y: 10 },
    childTransition: ((node: Element, params: FadeParams | undefined) => {
        return fade(node, { ...params, });
    }),
    childStagger: true,
    childStaggerDuration: 75,
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

export const debugState = (state: boolean) => state ? 'debug' : ""

