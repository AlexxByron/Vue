<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
<!-- Escribe Mensaje Aqui -->
    <ChatBurbuja
        v-for="message in messages" :key="message.id" v-bind="message"
        />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBurbuja from './ChatBurbuja.vue';


interface Props {
    messages: ChatMessage[];
}
defineProps<Props>();
</script>