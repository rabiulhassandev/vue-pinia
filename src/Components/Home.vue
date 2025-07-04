<template>

        <MobileView>
            <div class="text-center">
                <h6 class="pt-2">Let's play the game</h6>

                <h4 class="text-warning pt-3">Current Score: 0</h4>

                <h6 class="text-warning pt-5">Max Score: 0</h6>

                <div class="pt-1">
                    <button class="btn btn-success rounded-pill px-4 py-2 mx-1">Increament</button>
                    <button class="btn btn-danger rounded-pill px-4 py-2 mx-1">Decreament</button>
                </div>

                <button class="btn btn-primary rounded-pill px-5 py-2 mt-2">Random</button>
            </div>
            
        </MobileView>

</template>


<script setup lang="ts">
    import MobileView from '@/Layouts/MobileView.vue';

</script>