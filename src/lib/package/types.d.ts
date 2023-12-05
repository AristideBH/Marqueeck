type Directions = 'left' | 'right';

export type MarqueeckOptions = {
    speed: number;
    debug?: boolean;
    direction: Directions;
    paddingX: number;
    gap: number,
    onHover: 'none' | 'stop' | 'customSpeed';
    speedFactor: () => number;
    brakeDuration: number;
    hoverSpeed: number;
    paddingX: 20;
    childTransition: SvelteTransition;
    childStagger: boolean,
    childStaggerDuration: number,
    easing: (t: number) => number,
    still: boolean,
    isMouseIn: () => boolean,
    currentSpeed: () => number
}

export type PublicMarqueeckOptions = Omit<Partial<MarqueeckOptions>,
    "debug" | "still" | 'isMouseIn' | 'currentSpeed'>

export type Props = Partial<MarqueeckOptions>[]

// * SLIDE ACTION
export interface MarqueeckHoverEvent extends CustomEvent {
    detail: boolean;
}

export interface SlideAttributes {
    class?: string;
    'on:marqueeckHover'?: (e: MarqueeckHoverEvent) => void;
}
