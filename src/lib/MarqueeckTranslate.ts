import { onMount, onDestroy } from "svelte";

export type MarqueeckTranslateOptions = {
    direction: 'left' | 'right';
    distance: () => number;
    currentSpeed: () => number;
    isMouseIn: () => boolean;
};

export function MarqueeckTranslate(node: HTMLElement, options: MarqueeckTranslateOptions): void {
    console.log("Before marquee mount");

    onMount(() => {
        console.log("OnMount");
        const ribbon = node.getElementsByClassName('marqueeck-ribbon')[0] as HTMLElement;


        const { direction } = options;
        const distance = options.distance() ?? 0;
        const distanceToMove = Math.abs(distance);
        let currentX = -2 * distance,
            totalMoved = distance;

        const loopTranslate = () => {
            if (direction === 'left') {
                currentX = 1 * (totalMoved % distance);
            } else {
                currentX = 1 * (totalMoved % distance) - distance;
            }
        };

        function update() {

            const currentSpeed = options.currentSpeed();
            currentX += direction === 'left' ? -currentSpeed / 60 : currentSpeed / 60;

            if (direction === 'left') {
                ribbon.style.transform = `translateX(${-currentX}px)`;
            } else {
                ribbon.style.transform = `translateX(${currentX}px)`;
            }

            totalMoved += Math.abs(currentSpeed) / 60;
            if (totalMoved >= distanceToMove) loopTranslate();

            requestAnimationFrame(update);
        }
        update();
        console.log("------");
    })
    onDestroy(() => {
        console.log('destroyed')
    })

}