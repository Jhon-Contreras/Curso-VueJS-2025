
<template>
    <section>
        <h3>Counter:{{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useCounter } from '../components/composables/useCounter'

    

    // const props = defineProps<Props>();
        const {counter, squareCounter} = useCounter(10)



</script>



<style scoped>

.btn{
    @apply p-5 bg-blue-500 mr-2 hover:bg-blue-700;
}
</style>