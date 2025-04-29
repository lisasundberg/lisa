import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationConfig =
    | { type: 'from' | 'to'; vars: GSAPTweenVars; scroll?: ScrollTrigger.Vars }
    | { type: 'fromTo'; vars: { from: GSAPTweenVars; to: GSAPTweenVars }; scroll?: ScrollTrigger.Vars };

// A Map to store active animations, associating each node with its GSAP tween
const animationStore = new Map<HTMLElement, GSAPTween>();

// A Set to store active ScrollTrigger instances for proper cleanup
const scrollTriggers = new Set<ScrollTrigger>();

export function animate(node: HTMLElement, config: AnimationConfig) {
    let tween: GSAPTween;

    if (config.type === 'fromTo') {
        if (!('from' in config.vars) || !('to' in config.vars)) {
            throw new Error("For 'fromTo' animations, 'vars' must include both 'from' and 'to' properties.");
        }
        tween = gsap.fromTo(node, config.vars.from, config.vars.to);
    } else {
        tween = gsap[config.type](node, config.vars);
    }

    let scrollTrigger: ScrollTrigger | undefined;

    // If ScrollTrigger settings are provided, create a ScrollTrigger instance
    if (config.scroll) {
        scrollTrigger = ScrollTrigger.create({
            trigger: node, // The element that triggers the animation
            ...config.scroll, // Spread the provided ScrollTrigger settings
            animation: tween // Link the animation to the ScrollTrigger
        });
        scrollTriggers.add(scrollTrigger); // Add the ScrollTrigger to the Set for tracking
    }

    // Store the animation in the Map, associating it with the node
    animationStore.set(node, tween);

    return {
        // Clean up the animation and its associated ScrollTrigger (if any).

        destroy() {
            tween.kill();
            animationStore.delete(node); // Remove the animation from the Map
            if (scrollTrigger) {
                scrollTrigger.kill(); // Kill the ScrollTrigger instance
                scrollTriggers.delete(scrollTrigger); // Remove it from the Set
            }
        }
    };
}

// Refreshes all ScrollTrigger instances.
export function refreshScroll() {
    ScrollTrigger.refresh();
}

// Clears all active animations and ScrollTrigger instances.
export function clearAnimations() {
    // Kill all animations and remove them from the Map
    animationStore.forEach((tween, node) => {
        tween.kill();
        animationStore.delete(node);
    });

    // Kill all ScrollTrigger instances and clear the Set
    scrollTriggers.forEach(st => st.kill());
    scrollTriggers.clear();
}