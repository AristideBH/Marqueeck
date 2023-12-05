import Usage from './Usage.svelte';
import Props from './Props.svelte';
import Styling from './Styling.svelte';
import Events from './Events.svelte';
import About from './About.svelte';
import Helpers from './Helpers.svelte';

export const sections = [
    { label: 'Usage', value: 'usage', component: Usage },
    { label: 'Props', value: 'props', component: Props },
    { label: 'Events', value: 'events', component: Events },
    { label: 'Styling', value: 'styling', component: Styling },
    { label: 'Helpers', value: 'helpers', component: Helpers },
    { label: 'About', value: 'about', component: About }
];