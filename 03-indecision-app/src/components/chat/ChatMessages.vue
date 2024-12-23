<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->
            <ChatBubble
            v-for="message in messages"
            :key="message.id"
            v-bind="message"
            />
           
        </div>
    </div> 
</template>


<script lang="ts" setup>
    import type { ChatMessage } from '@/interfaces/chat-message.interface';
    import ChatBubble from './ChatBubble.vue';
    import { ref, watch } from 'vue';

    interface Props {
        messages: ChatMessage[];

    }
    const props = defineProps<Props>();

    // chatRef para mover automaticamente hacia el fondo del div y que el scroll sea automatico
    const chatRef = ref<HTMLDivElement | null>(null);
    //watch función para activar una devolución de llamada cada vez que cambia una parte del estado reactivo
    watch(props.messages, () =>{
        setTimeout(()=>{ // setTimeout para darle tiempo al scroll
            chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth',
            })
        }, 100)
       
    });
    
</script>