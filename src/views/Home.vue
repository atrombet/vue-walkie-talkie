<template>
  <h2>Home</h2>
  <User>
    <template v-slot:user="{ user }">
      <div v-if="user">
        <UserProfile :user="user" />
        <ChatList :uid="user.uid" />
      </div>
      <Login v-else />
    </template>
  </User>
</template>

<script>
import Login from '@/components/Login.vue';
import User from '@/components/User.vue';
import UserProfile from '@/components/UserProfile.vue';
import ChatList from '@/components/ChatList.vue';

export default {
  name: 'Home',
  components: {
    Login,
    User,
    UserProfile,
    ChatList
  }
}
</script>

<style>

</style>
