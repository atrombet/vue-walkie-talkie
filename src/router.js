import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ChatRoom from '@/views/ChatRoom.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/chats/:id', component: ChatRoom }
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
