// Reexport your entry components here
import Marqueeck from "./Marqueeck.svelte"
import type { MarqueeckOptions as MOptions } from "./Marqueeck"

export default Marqueeck
export type MarqueeckOptions = Partial<MOptions>;
