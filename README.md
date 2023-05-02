# Marqueeck

Marqueeck is a custom marquee component for Sveltekit, speed-eased, style-free and without dependencies.

Features :

- ♾️ Auto-repeat slotted elements (reactive to screen's width)
- 🎛️ Custom speed, directions, gap, paddings, etc..
- 🧶 Minimum styling (come with your own classes)
- 🖱️ Custom hover interactions (stop, custom speed and event forwarding)
- 📍 Optional sticky element (start/end)
- 🐞 Debug mode
- ✅ Fully typed with TypeScript

[Demo](https://marqueeck.vercel.app)

[Github page](https://github.com/AristideBH/Marqueeck)

## Installation

`npm i @arisbh/marqueeck`
or
`pnpm i @arisbh/marqueeck`
or
`yarn i @arisbh/marqueeck`

## Usage

Once you've installed the module, use it in your project.

```svelte
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck>[Your element]</Marqueeck>
```

### Passing options

You can either pass your options directly in the `<Marqueeck/>` component :

```svelte
<Marqueeck options={{ speed: 75, direction: 'left' }}>[Your element]</Marqueeck>
```

or by constructing a MarqueeckOptions object, using the provided `MarqueeckOptions` type :

```svelte
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

<Marqueeck {options}>[Your element]</Marqueeck>
```

### Optional sticky element

You can using the reserved `svelte:fragment` to place a sticky element inside the component.

```svelte
<Marqueeck {options}>
	[Your element]
	<svelte:fragment slot="sticky">[Sticky element]</svelte:fragment>
</Marqueeck>
```

Edit the placement of the sticky element with `stickyPosition` key.

### Hover directive

You can pass a custom function to run when you hover on the Marqueeck element.

```svelte
<script>
	import Marqueeck from '@arisbh/marqueeck';

	const handleHover = () => {
		//do what you want
	};
</script>

<Marqueeck on:hover={{ handleHover }}>[Your element]</Marqueeck>
```

### Default options

```js
const options = {
	speed: 50, // in px/sec
	direction: 'left', // either 'left' or 'right'
	gap: 20, // in px
	paddingX_Wrapper: 20, // in px
	paddingY_Wrapper: 16, // in px
	debug: false,
	onHover: 'customSpeed', // either 'none', 'stop' or 'customSpeed'
	gradualHoverDuration: 1250, // in ms
	hoverSpeed: 10, // in px/sec
	stickyPosition: 'start' // either 'start' or 'end'
};
```

## Styling

Marqueeck comes with minimal style integration, giving you the flexibility to use your preffered classes and styling paradigm.

### Slotted Component

You have full control over the element you're slotting inside Marqueeck, therefore you can style it as you want.

### CSS Variables

You can directly pass CSS variables to Marqueeck like so :

```svelte
<Marqueeck --bg-color={'red'} --text-color={'#fff'} />
```

### Custom classes

Marqueeck accepts `contentClasses`, `elementClasses` and `stickElClasses` as strings to style the different aspect of the components.

Define your own custom class or use utility framework like [Tailwind](https://tailwindcss.com/) or [MasterCSS](https://css.master.co)
