<script>
	import Header from "./components/Header.svelte";	
	import Footer from "./components/Footer.svelte";

	import FormAddPoll from "./components/FormAddPoll.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import PollList from "./components/PollList.svelte";

	let itemsTab = ["Current POLLS", "New POLL"];
	let activeTab = "Current POLLS";

	const tabHandler = (e) => activeTab = e.detail;

	const handlerPoll = e => {
		activeTab = "Current POLLS";
	}

</script>

<Header />
<main>
	<Tabs {activeTab} {itemsTab} on:tabHandler={tabHandler} />
	{#if activeTab === "Current POLLS" }
		<PollList/>
	{:else}
	<FormAddPoll on:addPoll={handlerPoll}/>
	{/if}
</main>
<Footer />
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>