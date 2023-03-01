<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	const url = 'https://rvius.com';

	export let customMeta = {};
	const meta = {
		title: 'Letoro Grooming',
		desc: 'Boarding, Boarding, Spa, Scaling',
		url: $page.url.href,
		image: url + '/shop.jpg',
		...customMeta
	};
</script>

<MetaTags
	title={meta.title}
	titleTemplate={`${meta.title} | ${meta.desc}`}
	description={meta.desc}
	canonical={meta.url}
	openGraph={{
		url: meta.url,
		title: meta.title,
		description: meta.desc,
		type: 'website',
		images: [
			{
				url: meta.image,
				width: 800,
				height: 600,
				alt: meta.title
			}
		],
		site_name: meta.title
	}}
/>
