<script>
    import { fade, scale } from "svelte/transition";
    import { flip } from "svelte/animate";

    import PollStore from "../stores/PollStore.js";
    import PollCard from "./Poll.svelte";

</script>

<div>
    <div class="polls-list">
        {#each $PollStore as poll (poll.id)}
            <div in:fade out:scale|local animate:flip={{duration: 500}} >
                <PollCard {poll} />
            </div>
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