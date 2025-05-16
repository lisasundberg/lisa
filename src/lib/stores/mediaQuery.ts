import { readable } from 'svelte/store';
import { gsap } from 'gsap';

// export const pageRevealFinished = writable<boolean>(false);

let mm;

if (typeof window !== "undefined") {

    mm = gsap.matchMedia();

    // mm.add({
    //     isMobile: "(max-width: 767px)",
    //     isDesktop: "(min-width: 768px)",
    // }, (context) => {
    //     let { isMobile, isDesktop } = context.conditions;

    //     // export values
    // })


    mm.add("(max-width: 767px)", () => {
        console.log('is mobile')
    })
    mm.add("(min-width: 768px)", () => {
        console.log('is desktop')
    })
}