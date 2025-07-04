<script setup>
import MobileView from "@/Layouts/MobileView.vue";
</script>

<template>
    <MobileView>
        <section class="min-h-screen bg-gray-900 text-white py-12 px-6 flex items-center justify-center">
            <div class="text-center">
                <h5 class="text-warning mb-3">About This Game</h5>
                <p>
                    its a simple yet engaging turn-based game i tried to create using
                    <strong>Vue 3</strong> and <strong>Pinia</strong>.
                </p>

                <p class="mb-4 text-muted">
                    <i>
                        Your score increases with each attack and decreases with defense. You win if you reach the target score before exhausting all your attempts.
                    </i>
                </p>

                <hr>

                <h5 class="text-warning mb-3 pt-2">Tech Stack</h5>
                <ul class="list-disc list-inside text-muted text-start mb-5">
                    <li>Vue 3 Composition API</li>
                    <li>Pinia (State Management)</li>
                    <li>Bootstrap 5</li>
                </ul>

                <hr>

                <p class="text-muted">
                    <small>
                        Developed by
                        <a href="https://github.com/rabiulhassandev" class="text-blue-400 hover:underline"
                            target="_blank">RABIUL HASSAN</a>. Check out the code on
                        <a href="https://github.com/rabiulhassandev/vue-pinia-PowerPlayGame" target="_blank"
                            class="text-blue-400 hover:underline">GitHub</a>.
                    </small>
                </p>
            </div>
        </section>
    </MobileView>
</template>
