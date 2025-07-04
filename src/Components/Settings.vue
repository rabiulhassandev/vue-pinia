<template>
    <MobileView>
        <p class="text-muted text-center">
            <small>Adjust your game settings here.</small>
        </p>
        <div class="row">
            <div class="col-md-12 mt-2">
                <label>Increment Score:</label>
                <input type="number" v-model.number="gameStore.maxAttack" class="form-control" />
            </div>
            <div class="col-md-12 mt-2">
                <label>Decrrement Score:</label>
                <input type="number" v-model.number="gameStore.maxDefense" class="form-control" />
            </div>
            <div class="col-md-12 mt-2">
                <label>Max Attempt:</label>
                <input type="number" v-model.number="gameStore.maxAttempt" class="form-control" />
            </div>
            <div class="col-md-12 mt-2">
                <label>Win Score:</label>
                <input type="number" v-model.number="gameStore.winScore" class="form-control" />
            </div>
        </div>
        <div class="text-center">
            <router-link class="btn btn-primary rounded-pill px-5 py-2 mt-2" :to="{name: 'home'}">Go to Home</router-link>
        </div>
    </MobileView>
</template>


<script setup>
    import MobileView from '@/Layouts/MobileView.vue';
    import { useGameStore } from '@/store/gameStore';

    const gameStore = useGameStore();


</script>