
type MarqueeTranslateOptions = {
    direction: 'left' | 'right';
    distance: number;
    currentSpeed: () => number;
    isMouseIn: () => boolean;
};

export function MarqueeTranslate(node: HTMLElement, options: MarqueeTranslateOptions): void {
    const { direction, distance } = options;
    let currentX = -2 * distance, totalMoved = distance;
    const distanceToMove = Math.abs(distance);

    const loopTranslate = () => {
        if (direction === "left") {
            currentX = 1 * (totalMoved % distance);
        } else {
            currentX = 1 * (totalMoved % distance) - distance;
        }
        // console.log("💫");
    };

    function update() {
        const currentSpeed = options.currentSpeed();
        currentX += direction === "left" ? -currentSpeed / 60 : currentSpeed / 60;

        if (direction === "left") {
            node.style.transform = `translateX(${-currentX}px)`;
        } else {
            node.style.transform = `translateX(${currentX}px)`;
        }

        // Keep track of total distance moved
        totalMoved += Math.abs(currentSpeed) / 60;
        if (totalMoved >= distanceToMove) loopTranslate();

        requestAnimationFrame(update);
    }

    update();
}
