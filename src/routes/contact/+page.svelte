<script lang="ts">
	import { page } from '$app/stores';
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import ContactData from '$lib/data/contact';

	let isSubmitting = $state(false);
	
	const redirectUrl = $derived(`${$page.url.origin}/contact/thanks`);
</script>

<TitledPage title={ContactData.title}>
	<div class="mx-auto w-full max-w-lg">
		<Card class="p-6">
			<CardContent class="p-0">
				<Muted class="mb-6 text-center">{ContactData.description}</Muted>
				
				<form
					action="https://formsubmit.co/{ContactData.email}"
					method="POST"
					class="flex flex-col gap-4"
					onsubmit={() => isSubmitting = true}
				>
					<!-- FormSubmit Configuration -->
					<input type="hidden" name="_subject" value="New message from Portfolio" />
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_template" value="table" />
					<input type="hidden" name="_next" value={redirectUrl} />
					<input type="text" name="_honey" style="display:none" />
					
					<div class="flex flex-col gap-2">
						<Label for="name">Name</Label>
						<Input 
							type="text" 
							id="name" 
							name="name" 
							placeholder="Your name" 
							required 
						/>
					</div>
					
					<div class="flex flex-col gap-2">
						<Label for="email">Email</Label>
						<Input 
							type="email" 
							id="email" 
							name="email" 
							placeholder="your@email.com" 
							required 
						/>
					</div>
					
					<div class="flex flex-col gap-2">
						<Label for="subject">Subject</Label>
						<Input 
							type="text" 
							id="subject" 
							name="subject" 
							placeholder="What's this about?" 
							required 
						/>
					</div>
					
					<div class="flex flex-col gap-2">
						<Label for="message">Message</Label>
						<Textarea 
							id="message" 
							name="message" 
							placeholder="Your message..." 
							rows={5}
							required 
						/>
					</div>
					
					<Button type="submit" class="mt-2" disabled={isSubmitting}>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</Button>
				</form>
			</CardContent>
		</Card>
	</div>
</TitledPage>
