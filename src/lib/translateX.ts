
type TranslateXOptions = {
    direction: 'left' | 'right';
    speed: number;
    distance: number;
    currentSpeed: () => number;
};

export function TranslateX(node: HTMLElement, options: TranslateXOptions): void {
    const { direction, speed, distance } = options;
    const resetTranslate = () => {
        currentX = -2 * distance;
        totalMoved = 0;
        console.log("looping marquee content");
    }

    let currentX = -2 * distance;
    let totalMoved = distance;
    const distanceToMove = Math.abs(distance);

    function update() {
        const currentSpeed = options.currentSpeed();
        currentX += direction === 'left' ? -currentSpeed / 60 : currentSpeed / 60;
        node.style.transform = `translateX(${currentX}px)`;

        // Keep track of total distance moved
        totalMoved += Math.abs(speed) / 60;
        if (totalMoved >= distanceToMove) {
            // If the element has moved the required distance and reset is true, cycle back to start
            resetTranslate()

        }

        requestAnimationFrame(update);

    }

    update();
}
