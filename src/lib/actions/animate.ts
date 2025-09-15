import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AnimationType = 'from' | 'to' | 'fromTo';

interface AnimationOptions extends GSAPTweenVars {
    type: AnimationType;
    timeline?: gsap.core.Timeline;
    position?: string | number; // timeline position parameter (optional)
    scrollTrigger?: ScrollTrigger.Vars; // ScrollTrigger options
    animations?: Array<{
        target: string | HTMLElement; // Selector or element
        vars: GSAPTweenVars; // Animation properties
        position?: string | number; // Timeline position
        type?: AnimationType; // Specific animation type for this tween
    }>;
}

function handleTimelineAnimation(
    timeline: gsap.core.Timeline,
    animations: AnimationOptions['animations']
): void {
    animations?.forEach(({ target, vars, position, type = 'from' }) => {
        if (type === 'from') {
            timeline.from(target, vars, position);
        } else if (type === 'to') {
            timeline.to(target, vars, position);
        } else if (type === 'fromTo') {
            const { from, to, ...restVars } = vars as any; // Ensure `from` and `to` are extracted
            timeline.fromTo(target, from, to, { ...restVars, position });
        }
    });
}

export function animate(
    node: HTMLElement,
    {
        type,
        timeline,
        position,
        scrollTrigger,
        animations,
        ...vars
    }: AnimationOptions
): { destroy?: () => void } {
    gsap.registerPlugin(ScrollTrigger);

    let tween: gsap.core.Tween | gsap.core.Timeline | null;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    if (timeline) {
        // Add animations to the timeline
        handleTimelineAnimation(timeline, animations);

        // Attach ScrollTrigger to the timeline if scrollTrigger options are provided
        if (scrollTrigger) {
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: scrollTrigger.trigger ?? node,
                animation: timeline, // Attach the timeline to the ScrollTrigger
                ...scrollTrigger
            });
        }
    } else {
        // Handle standalone animations
        if (type === 'from') {
            tween = gsap.from(node, {
                ...vars,
                duration: vars.duration ?? 0.5
            });
        } else if (type === 'to') {
            tween = gsap.to(node, {
                ...vars,
                duration: vars.duration ?? 0.5
            });
        } else {
            tween = gsap.fromTo(node, vars.from, vars.to, {
                duration: vars.duration ?? 0.5
            });
        }

        // Attach ScrollTrigger to the tween if scrollTrigger options are provided
        if (scrollTrigger) {
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: scrollTrigger.trigger ?? node,
                animation: tween, // Attach the tween to the ScrollTrigger
                ...scrollTrigger
            });
        }
    }

    return {
        destroy() {
            // Kill the tween or timeline if it exists
            if (tween) {
                tween.kill();
                tween = null; // Nullify the reference to avoid memory leaks
            }

            if (timeline) {
                timeline.kill(); // Kill the timeline
            }

            // Kill the specific ScrollTrigger instance
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
                scrollTriggerInstance = null;
            }
        }
    };
}