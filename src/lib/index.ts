// Reexport your entry components here
import Marqueeck from "./Marqueeck.svelte"
import type { MarqueeckOptions as Options } from "./Marqueeck"

// Helpers
import { pingPongHelper, factorDamper, scrollState, scrollHandler } from "$lib/SpeedFactorHelpers";

export default Marqueeck
export type MarqueeckOptions = Options;

export { pingPongHelper, factorDamper, scrollState, scrollHandler }
