<script lang="ts" type="module">
	import { onMount } from	'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import gsap from "gsap/dist/gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";

	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/index.css';

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

	let lenis;
	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', (e) => {
			console.log(e)
		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time)=>{
			lenis.raf(time * 1000);
		})

		gsap.ticker.lagSmoothing(0)
	})
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<main on:mousemove={handleMousemove} style="--hue: {value}">
	<!-- <input type="range" name="hue" id="hue" min="0" max="100" bind:value /> -->
	<section class="intro">
		<div class="content">
			<header>
			<h2>Hi, I'm Lisa</h2>
			<p>
				Frontend developer based in Stockholm, Sweden, with a passion for beautiful and brand building user experiences.
			</p>
		</header>
		</div>
	</section>

	<section class="cv">
		<div class="column">
			<h3>Work</h3>
			<ol class="list">
				<li class="item">
					<h4 class="place label">Alster, Stockholm</h4>
					<p class="activity">Frontend developer</p>
					<time class="year">2022—</time>
				</li>
				<li class="item">
					<h4 class="place label">Another State, Stockholm</h4>
					<p class="activity">Frontend developer</p>
					<time class="year">2019—2022</time>
				</li>
				<li class="item">
					<h4 class="place label">Another State, Stockholm</h4>
					<p class="activity">Frontend developer intern</p>
					<time class="year">2018—2019</time>
				</li>
				<li class="item">
					<h4 class="place label">Ogilvy & Mather, Amsterdam</h4>
					<p class="activity">Creative / art director</p>
					<time class="year">2015-2016</time>
				</li>
			</ol>
		</div>
		<div class="column">
			<h3>Education</h3>
			<ol class="list">
				<li class="item">
					<h4 class="place label">Medieinstitutet, Stockholm</h4>
					<p class="activity">Frontend developer</p>
					<time class="year">2017-2019</time>
				</li>
				<li class="item">
					<h4 class="place label">Hyper Island, Karlskrona</h4>
					<p class="activity">Digital media creative</p>
					<time class="year">2013-2015</time>
				</li>
				<li class="item">
					<h4 class="place label">Södertörn University, Stockholm</h4>
					<p class="activity">Media technology</p>
					<time class="year">2012-2013</time>
				</li>
			</ol>
		</div>
	</section>
</main>


<!-- <svg width="1920" height="1080" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
