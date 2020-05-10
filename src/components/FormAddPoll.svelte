<script>
    import PollStore from "../stores/PollStore.js";
    import { createEventDispatcher } from "svelte";

    import FormGroup from "../shared/formElements/Input.svelte";
    import Button from "../shared/formElements/Button.svelte";

    let answer = { question: "", answerA: "", answerB: "" };
    $: error = { question: "", answerA: "", answerB: "" };

    const dispatch = createEventDispatcher();

    let isValid = false;

    const validationQuestion = () => {
    
        if(answer.question.trim().length < 5){
            error.question = "Question Must Be at least 5 Characters Long";
            isValid = false;
        }else{
            error.question = "";
        }
    }

    const validationAnswerA = () => {
        if(answer.answerA.trim().length < 1){
            error.answerA = "Answer A Cannot Be Empty"
            isValid = false;
        }else{
            error.answerA = "";
        }
    }

    const validationAnswerB = () => {
        if(answer.answerB.trim().length < 1){
            error.answerB = "Answer B Cannot Be Empty"
            isValid = false;
        }else{
            error.answerB = "";
        }
    }

    const addPollHandler = (e) => {
        isValid = true;
        validationAnswerA();
        validationAnswerB();
        validationQuestion();
        if(isValid){
            let poll = {id: Math.random(), ...answer, voteAnswerA: 0, voteAnswerB: 0, showVote: false}
            PollStore.update( currentPoll => [...currentPoll, poll] );
            dispatch("addPoll");
        }
    }
</script>

<form on:submit|preventDefault={addPollHandler}>
    <FormGroup>
        <label for="name">Question</label>
        <input type="text"  on:change={validationQuestion} placeholder="Entered Your Question" class:error={error.question} bind:value={answer.question} >
        <div class="error">{error.question}</div>    
    </FormGroup>
    <FormGroup>
        <label for="name">Answer A</label>
        <input type="text"  on:change={validationAnswerA} placeholder="Your Answer" class:error={error.answerA} bind:value={answer.answerA} >    
        <div class="error">{error.answerA}</div>    
    </FormGroup>
    <FormGroup>
        <label for="name">Answer B</label>
        <input type="text" on:change={validationAnswerB} placeholder="Your Answer" class:error={error.answerB} bind:value={answer.answerB} >    
        <div class="error">{error.answerB}</div>    
    </FormGroup>
    <FormGroup>
        <Button type="submit" secondary >SAVE</Button>
    </FormGroup>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    input:focus{
        border-color: orangered;
    }
    label{
        margin: 10px auto;
        text-align: left
    }
    .error{
        color: red;
    }
    input.error{
        border-color: red;
    }
</style>