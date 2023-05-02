# Marqueeck

Marqueeck is a custom marquee component for Sveltekit, speed-eased, style-free and without dependencies.

Features :

- Auto-repeat slotted elements (reactive to screen width)
- Custom speed, directions, gap, paddings, etc..
- Completely unstyled (come with your own classes)
- Custom hover interactions (stop, custom speed and event forwarding)
- Optional sticky element (start/end)
- Debug mode
- Fully typed with TypeScript

## Installation

Install the module from npm

```bash
npm i @arisbh/marqueeck
```

or

```bash
pnpm i @arisbh/marqueeck
```

or

```bash
yarn i @arisbh/marqueeck
```

## Usage

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```html
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck> [Your element] </Marqueeck>
```

### Passing options

You can either pass your options directly in the `<Marqueeck/>` component :

```html
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck options={{ speed: 75, direction: 'left' }} >
    [Your element]
</Marqueeck>
```

or by constructing a MarqueeckOptions object, using provided Type :

```html
<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import type { MarqueeckOptions } from '@arisbh/marqueeck';

	const options: MarqueeckOptions = {
		speed: 75,
		direction: 'left',
		onHover: 'customSpeed',
		hoverSpeed: 15,
		gradualHoverDuration: 750
	};
</script>

<Marqueeck {options}> [Your element] </Marqueeck>
```

### Optional sticky element

You can using the reserved `svelte:fragment` to place a sticky element inside the component.

```html
<Marqueeck {options}>
	[Your element]
	<svelte:fragment slot="sticky"> [Sticky element] </svelte:fragment>
</Marqueeck>
```
