
<template>
    <section>
        <h3>Counter:{{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useCounter } from '../components/composables/useCounter'


    // const props = defineProps<Props>();
    const {counter, squareCounter} = useCounter(2)

</script>



<style scoped>

</style>