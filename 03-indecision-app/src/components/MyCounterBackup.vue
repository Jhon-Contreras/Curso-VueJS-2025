
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
    import { ref, computed } from 'vue';

    // version JS
    // const props = defineProps({
    //     value: { type: Number, required: true },
    // })

    // version TS
    interface Props {
        value: number;
    }
    const props = defineProps<Props>();

    const counter = ref( props.value );

    const squareCounter = computed( ()=> counter.value * counter.value)

</script>



<style scoped>

.btn{
    @apply p-5 bg-blue-500 mr-2 hover:bg-blue-700;
}
</style>