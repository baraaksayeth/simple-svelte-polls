<script>
    import { createEventDispatcher } from "svelte";

    export let activeTab, itemsTab;

    const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each itemsTab as item }
            <li  on:click={() => dispatch("tabHandler", item)}>
                <div class:active={ item === activeTab }>
                    {#if item === "Current POLLS" }
                        <p>CURRENT POLLS</p>
                    {:else}
                        <p>NEW POLL</p>
                    {/if}                
                </div>
            </li>

        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    .active{
        color: orangered;
        border-bottom: 1px solid orangered;
        padding-bottom: 7px;
    }
</style>