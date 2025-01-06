<script setup>
import { useCounterStore } from "../stores/counter.js";
const counterStore = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="counterStore.increment">+</button>
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.reset">reset</button>
      <div>
        {{ counterStore.count }}
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }
}
</style>
