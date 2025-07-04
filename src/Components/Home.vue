<template>
        <MobileView>
            <div class="text-center"  style="justify-content: space-around;" v-if="gameStore.isGameOver">
                <h5 class="text-success" v-if="gameStore.score >= gameStore.winScore">Congratulations! You won the game!</h5>
                <h5 class="text-danger" v-else>Game Over! You lost the game!</h5>
                <h6 class="text-white pt-2">Your score: {{ gameStore.score }}</h6>
                <h6 class="text-white pt-2">Attempt: {{ gameStore.attempt }}</h6>
                <button class="btn btn-warning rounded-pill px-5 py-2 mt-2" @click="gameStore.resetGame()">Start Over</button>
            </div>
            <div class="text-center" style="justify-content: space-around;" v-else>
                <h6 class="pt-2">Let's play the game</h6>
                <p class="text-muted">
                    <small><i>Max Attempt: {{ gameStore.maxAttempt }}, Win Score: {{ gameStore.winScore }}</i></small>
                </p>

                <div v-if="!gameStore.isGameStarted" class="pt-3">
                    <button class="btn btn-outline-warning rounded-pill px-5 py-2 mt-2" @click="gameStore.startGame()">Start Game</button>
                </div>
                <div v-else>
                    <h4 class="text-warning pt-3">Current Score: {{ gameStore.score }}</h4>
                    <p class="text-warning pt-5">Attempt Left: {{ gameStore.maxAttempt - gameStore.attempt }}</p>
                    <div class="pt-1">
                        <button class="btn btn-success rounded-pill px-4 py-2 mx-1" @click="incrementScore">Increament</button>
                        <button class="btn btn-danger rounded-pill px-4 py-2 mx-1" @click="decrementScore">Decreament</button>
                    </div>
                    <button class="btn btn-primary rounded-pill px-5 py-2 mt-2" @click="randomScore">Random</button>

                    <div class="text-center pt-5">
                        <a class="text-danger" style="cursor: pointer;" @click="gameStore.resetGame"><b>Quit Game</b></a>
                    </div>
                </div>
            </div>
            
        </MobileView>

</template>


<script setup lang="ts">
    import MobileView from '@/Layouts/MobileView.vue'
    import { useGameStore  } from '@/store/gameStore'

    const gameStore = useGameStore()    


    // increment function
    function incrementScore() {
        gameStore.setNextAttack()
    }

    // decrement function
    function decrementScore() {
        gameStore.setNextDefense()
    }

    // random function
    function randomScore() {
        Math.random() < 0.5 ? incrementScore() : decrementScore()
    }

</script>