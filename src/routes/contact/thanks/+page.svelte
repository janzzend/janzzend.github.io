<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import { href } from '$lib/utils';
</script>

<TitledPage title="Message Sent">
	<div class="mx-auto w-full max-w-lg">
		<Card class="p-6">
			<CardContent class="flex flex-col items-center gap-4 p-0 text-center">
				<div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
					<Icon icon="i-carbon-checkmark-filled" className="text-3xl text-green-500" />
				</div>
				<H2>Thank You!</H2>
				<Muted>
					Your message has been sent successfully. I'll get back to you as soon as possible.
				</Muted>
				<div class="mt-4 flex gap-2">
					<a href={href('/')}>
						<Button variant="outline">Back to Home</Button>
					</a>
					<a href={href('/contact')}>
						<Button>Send Another</Button>
					</a>
				</div>
			</CardContent>
		</Card>
	</div>
</TitledPage>
