<script lang="ts">
	let innerWidth: number;
	let innerHeight: number;

	let value: number = 100;
	let valueDark: number = 225;
	let valueLight: number = 70;

	let mouse = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<main on:mousemove={handleMousemove} style="--hue: {value}">
	<!-- <input type="range" name="hue" id="hue" min="0" max="100" bind:value /> -->
	<section>
		<div class="content">
			<h1>Lisa Sundberg</h1>
			<h2>Front end developer</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe assumenda praesentium
				dolores labore eligendi autem nesciunt dolorem ipsa excepturi culpa nobis reprehenderit,
				distinctio quidem. Atque incidunt consequatur enim consectetur sed?
			</p>
		</div>
	</section>
</main>
<svg width="1920" height="1080" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<radialGradient
			id="GradientPad"
			cx="0.5"
			cy="0.5"
			r="0.75"
			fx={(1 * mouse.x) / innerWidth}
			fy={(1 * mouse.y) / innerHeight}
			spreadMethod="pad"
		>
			<stop offset="0%" stop-color="hsl({(valueLight * value) / 100}, 75%, 89%)"></stop>
			<stop offset="100%" stop-color="hsl({(valueDark * value) / 100}, 100%, 75%)"></stop>
		</radialGradient>
	</defs>
	<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" fill="url(#GradientPad)"></rect>
</svg>

<style>
	main {
		text-align: left;
		/* background-color: hsl(var(--hue), 50%, 70%); */
		height: 100vh;
		font-family: 'Moon Dream';
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		/* color: hsl(calc(217 * var(--hue) / 70), 81%, 68%); */
		color: #6a9def;
		font-size: 10vw;
		line-height: 1;
		margin: 0;
	}
	h2 {
		color: #6a9def;
	}

	p {
		color: #722727;
		font-family: 'DM sans';
		max-width: 60ch;
	}

	svg {
		width: 100vw;
		height: 100dvh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	section {
	}
</style>
