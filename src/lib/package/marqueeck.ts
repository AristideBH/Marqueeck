import type { MarqueeckOptions, PublicMarqueeckOptions, Props, SlideAttributes } from "./types";
import type { FadeParams } from 'svelte/transition';
import type { ActionReturn } from "svelte/action";
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { get } from 'svelte/store';

// * DEFAULT PARAMETER
export const defaults: MarqueeckOptions = {
    speed: 75,
    direction: "right",
    gap: 20,
    onHover: 'customSpeed',
    brakeDuration: 1000,
    speedFactor: () => 1,
    hoverSpeed: 5,
    stickyPosition: 'start',
    paddingX: 20,
    childStagger: true,
    childStaggerDuration: 50,
    childTransition: ((node: Element, params: FadeParams | undefined) => {
        return fade(node, { ...params, });
    }),
    debug: false,
    easing: quadInOut,
    still: false,
    isMouseIn: () => false,
    currentSpeed: () => 75
}


// * ACTION
import { writable } from 'svelte/store';


/**
 * A Svelte action that animates a marqueeck slide.
 * 
 * @param {HTMLDivElement} node - The node where the action is applied.
 * @param {MarqueeckOptions} options - The options for the marqueeck slide.
 * 
 * @returns {ActionReturn<MarqueeckOptions, SlideAttributes>} - An object with an `update` method and a `destroy` method.
 * 
 * The `update` method is called whenever the `options` parameter changes, immediately after Svelte has applied updates to the markup.
 * The `destroy` method is called after the element is unmounted.
 * 
 * The `update` method also restarts the animation if it was not initially still.
 * The `destroy` method removes the event listeners when the action is destroyed.
 * 
 * The action can emit custom events and apply custom attributes to the element it is applied to.
 * 
 * @example
 * <div use:marqueeckSlide={{ direction: "right", gap: 10 }} />
 */
export function marqueeckSlide(
    node: HTMLDivElement,
    options: MarqueeckOptions
): ActionReturn<MarqueeckOptions, SlideAttributes> {
    const { still, gap } = options
    const marqueeckRibbon = node.querySelector('[data-marqueeck-ribbon]');
    const marqueeckChild = marqueeckRibbon?.querySelector('[data-marqueeck-child]') as HTMLElement;
    const initalPos = (x: number, y: number) => -(x + y)
    let childWidth = Math.floor(marqueeckChild!.getBoundingClientRect().width);

    // * INITIAL STATE
    marqueeckChild.style.opacity = "1";
    const store = writable({
        position: initalPos(childWidth, gap),
        animationFrameId: null as number | null,
        prefersReducedMotion: false,
    });

    // * REDUCED MOTIONS
    const mediaQuery: MediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMediaQuery = () => store.update(state => ({ ...state, prefersReducedMotion: mediaQuery.matches }));
    updateMediaQuery();

    // * ANIMATION
    const animate = () => {
        store.update(state => {
            if (state.prefersReducedMotion) return state;

            childWidth = Math.floor(marqueeckChild!.getBoundingClientRect().width);
            const { speedFactor, currentSpeed, direction, gap } = options;

            const isOutOfBounds = state.position >= 0 || state.position < 2 * initalPos(childWidth, gap);
            const position = isOutOfBounds ? initalPos(childWidth, gap) : state.position;

            const directionalFactor = () => direction === 'left' ? -1 : 1;

            const newPosition = position + (directionalFactor() * speedFactor()) * (currentSpeed() / 60);

            node.style.setProperty('--ribbonXpos', newPosition + 'px');
            return { ...state, position: newPosition, animationFrameId: requestAnimationFrame(() => animate()) };
        });
    }

    // * EVENTS HANDLERS
    const createHandler = (eventCheck: keyof GlobalEventHandlersEventMap) => (e: Event) => {
        if (!hasHoverState(options)) return;
        const eventType = e.type === eventCheck ? true : false;
        node.dispatchEvent(new CustomEvent('marqueeckHover', { detail: eventType }));
    }

    const handleMouse = createHandler('mouseenter');
    const handleFocus = createHandler('focus');

    // * EVENTS LISTENERS
    mediaQuery.addEventListener('change', updateMediaQuery);
    node.addEventListener('mouseenter', handleMouse);
    node.addEventListener('mouseleave', handleMouse);
    node.addEventListener("focus", handleFocus)
    node.addEventListener("focusout", handleFocus)

    if (!still) animate()

    return {
        update(updatedOptions: MarqueeckOptions) {
            options = { ...options, ...updatedOptions };
            const { animationFrameId } = get(store);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (!still) animate()
        },
        destroy() {
            if (mediaQuery) mediaQuery.removeEventListener('change', updateMediaQuery)
            node.removeEventListener('mouseenter', handleMouse);
            node.removeEventListener('mouseleave', handleMouse);
            node.removeEventListener("focus", handleFocus)
            node.removeEventListener("focusout", handleFocus)
        }
    };
};


// * UTILS
function isKeyOfMarqueeckOptions(key: string): key is keyof MarqueeckOptions {
    return key in defaults;
}

export const optionsMerger = (options: PublicMarqueeckOptions, props?: Props): MarqueeckOptions => {
    const merged: MarqueeckOptions = { ...defaults, ...options };

    props?.forEach(prop => {
        Object.entries(prop).forEach(([key, value]) => {
            if (value !== undefined && isKeyOfMarqueeckOptions(key)) {
                merged[key as keyof MarqueeckOptions] = value as never;
            }
        });
    });
    return merged;
}

// Return false if option 'onHover' is set to 'stop'
const hasHoverState = (options: MarqueeckOptions) =>
    options.onHover === 'stop' || options.onHover === 'customSpeed'
        ? true
        : false;