<script lang="ts">
	export let href: string;
	export let label: string;
  export let target: string = "_blank";
</script>

<div class="externalLink">
  <a {href} {target}>{label}</a>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" d="M0 7h15.5M10 1l6 6-6 6" stroke-width="1.25" />
  </svg>
  
  
</div>
<style>
  .externalLink {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--font-size-body);
  }

</style>