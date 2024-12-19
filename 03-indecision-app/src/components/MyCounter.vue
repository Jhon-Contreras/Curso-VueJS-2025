
<template>
    <section>
        <h3>Counter:{{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button @click="incrementOne">+1</button>
            <button @click="decrementOne">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue';
    const counter = ref(2);
    
    const incrementOne = () => {
        counter.value = counter.value + 1;
    }
    const decrementOne = () => {
        counter.value = counter.value - 1;
    }


    const squareCounter = computed( ()=> counter.value * counter.value)

</script>



<style scoped>

</style>