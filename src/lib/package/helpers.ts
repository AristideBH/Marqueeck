import { cubicInOut } from "svelte/easing";
import { tweened } from "svelte/motion";
import { writable } from "svelte/store";


// * PingPong
export function pingPongHelper(min: number, max: number, duration: number) {
    const internalStore = writable(min);
    const pingPongValue = tweened(min, {
        duration,
        easing: cubicInOut
    });

    function startPingPong(min: number, max: number) {
        pingPongValue
            .update((value) => {
                const target = value === min ? max : min;
                return target;
            })
            .then(() => startPingPong(min, max));
    }

    pingPongValue.subscribe((value) => {
        internalStore.set(value);
    });

    startPingPong(min, max);

    return {
        subscribe: internalStore.subscribe,
        get value() {
            let currentValue;
            internalStore.subscribe((value) => {
                currentValue = value;
            })();
            return currentValue;
        }
    };
}