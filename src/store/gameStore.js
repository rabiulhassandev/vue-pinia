import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        score: 0,
        maxHealth: 100,
        maxAttack: 30,
        maxDefense: 10,
    }),
    getters: {
        // get score
        getScore() {
            return this.score;
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
            this.score += attact;
        },

        // set next defense
        setNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log(`Defense: ${defense}`);
            this.score -= defense;
        },
    },
})