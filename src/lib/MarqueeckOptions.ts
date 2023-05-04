export type MarqueeckOptions = {
    speed?: number;
    direction?: 'left' | 'right';
    gap?: number;
    paddingX_Wrapper?: number;
    paddingY_Wrapper?: number;
    debug?: boolean;
    onHover?: 'none' | 'stop' | 'customSpeed';
    gradualHoverDuration?: number;
    hoverSpeed?: number;
    stickyPosition?: 'start' | 'end';
};