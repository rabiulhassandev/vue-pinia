import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("gameStore", () => {
    const score = ref(0);
    const maxAttack = ref(20);
    const maxDefense = ref(10);
    const attempt = ref(0);
    const maxAttempt = ref(10);
    const winScore = ref(100);
    const isGameStarted = ref(false);
    const isGameOver = ref(false);

    const getAttempt = computed(()=> attempt.value);

    // set next attact
    const setNextAttack = () => {
        if (!isGameStarted.value || isGameOver.value) return; // check if game is started and not over

        let attact = Math.floor(Math.random() * maxAttack.value) + 1;
        console.log(`Attack: ${attact}`);
        attempt.value++;
        score.value += attact;

        // check if game is over
        if (attempt.value >= maxAttempt.value || score.value >= winScore.value) {
            isGameOver.value = true;
            console.log("Game Over");
        }
    };

    // set next defense
    const setNextDefense = () => {
        if (!isGameStarted.value || isGameOver.value) return; // check if game is started and not over

        let defense = Math.floor(Math.random() * maxDefense.value) + 1;
        console.log(`Defense: ${defense}`);
        attempt.value++;
        score.value -= defense;

        // check if game is over
        if (attempt.value >= maxAttempt.value || score.value >= 100) {
            isGameOver.value = true;
            console.log("Game Over");
        }
    };

    // reset game
    const resetGame = () => {
        score.value = 0;
        attempt.value = 0;
        isGameStarted.value = false;
        isGameOver.value = false;
        console.log("Game Reset");
    };

    // start game
    const startGame = () => {
        resetGame();
        isGameStarted.value = true;
        console.log("Game Started");
    };


    return {
        // state variables
        score,
        maxAttack,
        maxDefense,
        attempt,
        maxAttempt,
        winScore,
        isGameStarted,
        isGameOver,


        // getters
        getAttempt, 
        
        // actions
        setNextAttack, setNextDefense, resetGame, startGame
    };
})