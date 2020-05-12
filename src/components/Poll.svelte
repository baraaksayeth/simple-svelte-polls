<script>
    import PollStore from "../stores/PollStore.js";
    import { tweened } from "svelte/motion";

    import Card from "../shared/Card.svelte";
    import Button from "../shared/formElements/Button.svelte";

    export let poll;

    const handleVote = (option, id) => {
        PollStore.update( currentPoll => {

		let copiedVote = [...currentPoll];
		let thePoll = copiedVote.find( poll => poll.id == id );

		option === "a" ? thePoll.voteAnswerA++ : option === "b" && thePoll.voteAnswerB++;
		thePoll.showVote = true;

		return copiedVote;
        } )
    }

    const deletePoll = id => {
       return PollStore.update( currentPoll => currentPoll.filter( poll => poll.id != id ) );
    }

    $: totalVote = poll.voteAnswerA + poll.voteAnswerB;
    $: percentA = Math.round( 100 / totalVote * poll.voteAnswerA ) || 0;
    $: percentB = Math.round( 100 / totalVote * poll.voteAnswerB ) || 0;

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);

    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    

</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        {#if poll.showVote}
        <p>Total Votes: {totalVote}</p>
        {/if}
        <div class="answer" on:click={() => handleVote("a", poll.id)} >
            <div class="percent" class:percent-a={poll.showVote} style="width:{$tweenedA}%"></div>
            <span>{poll.answerA} {#if poll.showVote} ({percentA}%) {/if}</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)} >
            <div class="percent" class:percent-b={poll.showVote} style="width:{$tweenedB}%" ></div>
            <span>{poll.answerB} {#if poll.showVote} ({percentB}%) {/if}</span>
        </div>
        <div class="delete">
            <Button danger primary on:click={ () => deletePoll(poll.id) } >DELETE</Button>
        </div>
    </div>
</Card>

<style>
    h3{
        margin: 0 auto;
        color: #555;
    }
    p{
        margin-top: 6px;
        font-size: 14px;
        margin-bottom: 30px;
        color: #aaa;
    }
    .answer{
        cursor: pointer;
        position: relative;
        background: #fafafa;
        margin: 10px auto;
    }
    .answer:hover{
        opacity: 0.6;
    }
    span{
        display: inline-block;
        padding: 10px 20px;
    }
    .percent{
        position: absolute;
        height: 100%;
        box-sizing: border-box;
    }
    .percent-a{
        border-left: 4px solid #04d4d4;
        background: #04f3f36b;
    }
    .percent-b{
        border-left: 4px solid #74d604;
        background: #83f3049c;
    }
    .delete{
        margin-top: 30px;
    }
</style>