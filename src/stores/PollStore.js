import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Javascript or Python ?",
    answerA: "Javascript",
    answerB: "Python",
    voteAnswerA: 20,
    voteAnswerB: 80,
    showVote: false,
  },
]);

export default PollStore;
