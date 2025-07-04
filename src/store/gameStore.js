import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        score: 0,
        maxHealth: 100,
        maxAttack: 30,
        maxDefense: 10,
        attempt: 0,
        maxAttempt: 10,
        winScore: 100,
        isGameOver: false,
    }),
    getters: {
        // get score
        getAttempt() {
            return this.attempt;
        },

        health: (state) => state.maxHealth,
        attack: (state) => state.maxAttack,
        defense: (state) => state.maxDefense,
    },
    actions: {
        // set next attact
        setNextAttack() {
            let attact = Math.floor(Math.random() * this.maxAttack) + 1;
            console.log(`Attack: ${attact}`);
            this.attempt++;
            this.score += attact;

            // check if game is over
            if (this.attempt >= this.maxAttempt || this.score >= this.winScore) {
                this.isGameOver = true;
                console.log("Game Over");
            }
        },

        // set next defense
        setNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log(`Defense: ${defense}`);
            this.attempt++;
            this.score -= defense;

            // check if game is over
            if (this.attempt >= this.maxAttempt || this.score >= 100) {
                this.isGameOver = true;
                console.log("Game Over");
            }
        },

        // reset game
        resetGame() {
            this.score = 0;
            this.attempt = 0;
            this.isGameOver = false;
            console.log("Game Reset");
        },
    },
})