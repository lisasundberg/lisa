import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationConfig = {
    type: 'from' | 'to' | 'fromTo';
    vars: GSAPTweenVars;
    scroll?: ScrollTrigger.Vars;
};

const animationStore = new Set<GSAPTween>();

export function animate(node: HTMLElement, config: AnimationConfig) {
    const tween = config.type === 'fromTo'
        ? gsap.fromTo(node, config.vars.from, config.vars.to)
        : gsap[config.type](node, config.vars);

    if (config.scroll) {
        ScrollTrigger.create({
            trigger: node,
            ...config.scroll,
            animation: tween
        });
    }

    animationStore.add(tween);

    return {
        destroy() {
            tween.kill();
            animationStore.delete(tween);
            ScrollTrigger.getAll().forEach(st => st.kill());
        }
    };
}

export function refreshScroll() {
    ScrollTrigger.refresh();
}

export function clearAnimations() {
    animationStore.forEach(t => t.kill());
    ScrollTrigger.getAll().forEach(st => st.kill());
    animationStore.clear();
}