type Directions = 'left' | 'right';

export type MarqueeckOptions = {
    speed: number;
    debug?: boolean;
    direction: Directions;
    padding: {
        x: number;
        y: number;
    };
    gap: number,
    onHover: 'none' | 'stop' | 'customSpeed';
    speedFactor: number;
    brakeDuration: number;
    hoverSpeed: number;
    stickyPosition: 'start' | 'end';
    padding: { x: number; y: number };
    childTransition: SvelteTransition;
    childStagger: boolean,
    childStaggerDuration: number,
    easing: (t: number) => number,
    still: boolean,
    isMouseIn: () => boolean,
    currentSpeed: () => number,
}

export type PublicMarqueeckOptions = Omit<Partial<MarqueeckOptions>,
    "debug" | "still" | "childTransition" | 'isMouseIn' | 'currentSpeed'>

export type Props = Partial<MarqueeckOptions>[]

// * SLIDE ACTION
export interface SlideAttributes {
    class?: string;
    'on:marqueeckHover'?: (e: CustomEvent<boolean>) => void;
}

