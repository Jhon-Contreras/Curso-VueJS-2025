
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

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

    
    export default defineComponent({
        props:{
            value: { type: Number, required: true }
        },
        setup( props ){
            const counter = ref(props.value);
            const squareCounter = computed( ()=> counter.value * counter.value);

            return{
                counter,
                squareCounter,
            }
        }
    })
    
    //import { ref, computed } from 'vue';

    // version JS
    // const props = defineProps({
    //     value: { type: Number, required: true },
    // })

    // version TS
    // interface Props {
    //     value: number;
    // }
    // const props = defineProps<Props>();

    // const counter = ref( props.value );
    
    // const incrementOne = () => {
    //     counter.value = counter.value + 1;
    // }
    // const decrementOne = () => {
    //     counter.value = counter.value - 1;
    // }


    // const squareCounter = computed( ()=> counter.value * counter.value)

</script>



<style scoped>

</style>