<template>

        <MobileView>
            <div class="text-center">
                <h6 class="pt-2">Let's play the game</h6>

                <h4 class="text-warning pt-3">Current Score: {{ gameStore.score }}</h4>

                <h6 class="text-warning pt-5">Max Score: 0</h6>

                <div class="pt-1">
                    <button class="btn btn-success rounded-pill px-4 py-2 mx-1" @click="incrementScore">Increament</button>
                    <button class="btn btn-danger rounded-pill px-4 py-2 mx-1" @click="decrementScore">Decreament</button>
                </div>

                <button class="btn btn-primary rounded-pill px-5 py-2 mt-2" @click="randomScore">Random</button>
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