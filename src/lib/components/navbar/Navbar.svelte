<script lang="ts">
	import DesktopNavbar from './DesktopNavbar.svelte';
	import MobileNavbar from './MobileNavbar.svelte';
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks } from './types';

	export let navigationLinks: readonly NavigationLink[] = defaultNavigationLinks;
</script>

<DesktopNavbar class="desktop" {navigationLinks} />
<MobileNavbar class="mobile" {navigationLinks} />
