<template>
  <div>
    <ul>
      <li v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chats/${chat.id}`">{{ chat.id }}</router-link>
      </li>
    </ul>
    <button @click="createChatRoom()">Create New Chat Room</button>
  </div>
</template>

<script>
import { db } from '@/firebase';

export default {
  data: () => ({
    chats: []
  }),
  props: {
    uid: String
  },
  firestore() {
    return {
      chats: db.collection('chats').where('owner', '==', this.uid)
    }
  },
  methods: {
    async createChatRoom() {
      await db.collection('chats').add({
        createdAt: new Date(),
        owner: this.uid,
        members: [this.uid]
      })
    }
  }
}
</script>

<style>

</style>
