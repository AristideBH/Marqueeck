import type { LayoutLoad } from './$types';
import { version, dev } from '$app/environment';

export const load = (async () => {
    return {
        appVersion: version,
    };
}) satisfies LayoutLoad;