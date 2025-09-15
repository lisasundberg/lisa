<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';

	let split1: SplitText;
	let split2: SplitText;
	let split3: SplitText;
	let text1: HTMLParagraphElement;
	let text2: HTMLParagraphElement;
	let text3: HTMLParagraphElement;

	onMount(() => {
		gsap.registerPlugin(SplitText);

		document.fonts.ready.then(() => {
			split1 = SplitText.create(text1, {
				type: 'chars',
				charsClass: 'chars',
				propIndex: true,
				smartWrap: true, // makes sure words don't get split up even if I don't split on words
				autoSplit: true, // fixes line reflow problems
				// If I animate lines and use autoSplit, I should always add the tween in the onSplit callback to make sure the animation gets recalculated when the lines do

				onSplit: (self) => {
					// always return the tween if I use autoSplit
					return gsap.from(self.chars, {
						yPercent: 'random([-100, 100])', // picks either -100 or 100
						rotation: 'random(-30, 30)', // any value beteen -30 and 30
						autoAlpha: 0,
						// stagger: 0.05
						stagger: {
							amount: 2,
							from: 'random', // end, center
							repeat: -1,
							yoyo: true
						}
					});
				}
			});

			split2 = SplitText.create(text2, {
				type: 'lines',
				linesClass: 'lines++',
				mask: 'lines',
				propIndex: true
			});

			gsap.from(split2.lines, {
				yPercent: 50,
				autoAlpha: 0,
				stagger: 1,
				onComplete: () => {
					split2.revert();
				}
			});

			const tl = gsap.timeline({ repeat: -1 });
			split3 = SplitText.create(text3, {
				type: 'lines, words, chars',
				autoSplit: true,
				onSplit: (self) => {
					return tl
						.from(self.chars, {
							autoAlpha: 0,
							scaleX: 0,
							stagger: {
								amount: 1,
								from: 'random'
							}
						})
						.from(self.words, {
							yPercent: 50,
							stagger: {
								amount: 1
							}
						})
						.to(self.lines, {
							yPercent: 100,
							autoAlpha: 0,
							stagger: {
								amount: 0.25,
								from: 'end'
							}
						});
				}
			});
		});
	});
</script>

<section>
	<h1>Splitting</h1>
	<p class="label">Testing out GSAP's text split plugin since it's now free</p>

	<div class="test-area">
		<p class="text" bind:this={text1}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dui mauris, vitae
			suscipit dolor consectetur quis. Duis nisl ante, lacinia ac quam at, tincidunt bibendum ipsum.
			Nam non efficitur mi. In volutpat neque sed ex rutrum, id congue sapien accumsan. Cras dictum
			est sit amet mauris dapibus, eget consequat sem interdum. Proin laoreet libero et ultrices
			malesuada. Curabitur sapien dolor, ultrices et dignissim eget, sodales sed lectus.
		</p>
	</div>
	<div class="test-area">
		<p class="text" bind:this={text2}>
			I am a paragraph that<br />

			gets split,<br />
			animates in,<br />
			and then goes back to my previous unsplit state.
		</p>
	</div>
	<div class="test-area">
		<p class="text" bind:this={text3}>I can animate the characters, the words and the lines.</p>
	</div>
</section>

<style>
	.test-area {
		border: 1px solid currentColor;
		background-color: white;
		padding: 4em;
		border-radius: 0.5em;
		margin-top: var(--content-margin);
		width: fit-content;
	}

	.text {
		font-family: var(--font-sansserif);
	}
</style>
