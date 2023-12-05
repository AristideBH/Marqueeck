import Marqueeck from "./Marqueeck.svelte";
import { pingPongHelper, factorDamper, scrollHandler, scrollState } from "./helpers";
export default Marqueeck
export { pingPongHelper, factorDamper, scrollHandler, scrollState }

import type { PublicMarqueeckOptions, MarqueeckHoverEvent } from "./types";
type MarqueeckOptions = PublicMarqueeckOptions;
export type { MarqueeckOptions, MarqueeckHoverEvent }