import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { sections } from '.';

export const load = (async ({ params }) => {
    const sectionObject = sections.find(sec => sec.value === params.section)

    if (!sectionObject) {
        throw error(400, 'Invalid section');
    }

    return sectionObject;
}) satisfies PageLoad;