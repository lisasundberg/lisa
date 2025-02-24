<script lang="ts">
    export let active: boolean = false;
</script>

<a class="-plain {active ? '-open' : '-not-open'}" href="mailto:hello@lisasundberg.com">
    <span class="label-bold">
        {#if active}
        Open to work
        {:else}
        Not open to work
        {/if}
    </span>
</a>

<style>
    a {
        --_color-active: var(--theme-color-active, var(--color-green));
        --_color-inactive: var(--theme-color-inactive, var(--color-red));
        --_color-current: var(--_color-active);
        display: grid;
        grid-template-columns: 0.375em 1fr;
        grid-template-areas: 'dot label';
        align-items: center;
        gap: 0.75em;
        flex-shrink: 0;
        padding: 0.75em 1.125em;
        border: 0.075em solid var(--_theme-color-primary);
        border-radius: 1.5em;
        box-sizing: border-box;
    }

    a::before {
        content: '';
        grid-area: dot;
        display: block;
        width: 0.375em;
        height: 0.375em;
        border-radius: 50%;
        background-color: var(--_color-current);
        box-shadow: 0px 0px 6px 1.5px var(--_color-current);
    }

    span {
        grid-area: label;
        line-height: 1;
    }

    .-open {
        --_color-current: var(--_color-active);
    }

    .-not-open {
        --_color-current: var(--_color-inactive);
    }

</style>