import { localStorageStore } from '@skeletonlabs/skeleton';

import { type Writable } from 'svelte/store';
export const tabSet: Writable<number> = localStorageStore('tab', 0);
