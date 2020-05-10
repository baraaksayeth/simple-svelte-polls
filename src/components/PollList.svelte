<script>
    import PollStore from "../stores/PollStore.js";
    import PollCard from "./Poll.svelte";

</script>

<div>
    <div class="polls-list">
        {#each $PollStore as poll (poll.id)}
            <PollCard {poll} />
        {/each}
    </div>
    
</div>

<style>
    .polls-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>