<script lang="ts">
	import DesktopFooter from './DesktopFooter.svelte';
	import MobileFooter from './MobileFooter.svelte';
	import type { SocialLink } from './types';
	import { defaultSocials } from './types';

	export let year = 2026;
	export let owner = 'Maksym Yarmolenko';
	export let socials: readonly SocialLink[] = defaultSocials;
</script>

<DesktopFooter class="desktop" {year} {owner} {socials}>
	<slot name="middle" slot="middle" />
</DesktopFooter>

<MobileFooter class="mobile" {year} {owner} {socials}>
	<slot name="middle" slot="middle" />
</MobileFooter>
