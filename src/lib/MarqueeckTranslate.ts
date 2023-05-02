
type MarqueeckTranslateOptions = {
    direction: 'left' | 'right';
    distance: number;
    currentSpeed: () => number;
    isMouseIn: () => boolean;
};

export function MarqueeckTranslate(node: HTMLElement, options: MarqueeckTranslateOptions): void {
    const { direction, distance } = options;
    let currentX = -2 * distance,
        totalMoved = distance;
    const distanceToMove = Math.abs(distance);

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
            node.style.transform = `translateX(${-currentX}px)`;
            console.log('scrollleft');
        } else {
            node.style.transform = `translateX(${currentX}px)`;
            console.log('scrollright');
        }

        // Keep track of total distance moved
        totalMoved += Math.abs(currentSpeed) / 60;
        if (totalMoved >= distanceToMove) loopTranslate();

        requestAnimationFrame(update);
    }

    update();
}