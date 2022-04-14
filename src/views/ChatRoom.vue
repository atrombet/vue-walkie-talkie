<template>
  <main>
    <h2>Welcome to ChatRoom {{ chatId }}</h2>
    <User>
      <template #user="{ user }">
        <ul>
          <li v-for="message of messages" :key="message.id">
            {{ message.text }}
          </li>
        </ul>

        <input v-model="newMessageText" class="input" type="text" />

        <button :disables="!newMessageText || loading" class="button is-success" @click="addMessage(user.uid)">Send</button>
      </template>
    </User>
  </main>
</template>

<script>
import User from '@/components/User.vue';
import { db } from '@/firebase';

export default {
  components: {
    User
  },
  data: () => ({
    newMessageText: '',
    loading: false,
    messages: []
  }),
  firestore() {
    return {
      messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
    }
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection('messages');
    }
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;

      const { id } = this.messagesCollection.doc();
      try {
        await this.messagesCollection.doc(id).set({
          text: this.newMessageText,
          sender: uid,
          createdAt: new Date()
        });
      } catch (error) {
        alert(error);
      }

      this.loading = false;
      this.newMessageText = '';
    }
  }
}
</script>

<style>

</style>
