import { localStorageStore } from '@skeletonlabs/skeleton';

import { writable, type Writable } from 'svelte/store';
export const tabSet: Writable<number> = localStorageStore('tab', 0);
