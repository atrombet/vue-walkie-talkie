<template>
  <aside>
    <h2>Sign in Anonymously</h2>
    <button @click="auth.signInAnonymously()">Sign In</button><br>

    <div v-if="newUser">
      <h2>Sign up for a new account</h2>
      <a href="#" @click="newUser = false">Already a user?</a>
    </div>

    <div v-else>
      <h2>Sign In with Email</h2>
      <a href="#" @click="newUser = true">Not yet a user?</a>
    </div>

    <label for="email">Email</label><br>
    <input v-model="email" type="email" placeholder="email" class="input" />

    <label for="password">Password</label><br>
    <input v-model="password" type="password" placeholder="password" class="input" />

    <br>

    <button class="button is-info" :class="{ 'is-loading': loading }" @click="signInOrCreateUser()">
      {{ newUser ? 'Sign up' : 'Login' }}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from '@/firebase';

export default {
  data: () => ({
    auth,
    newUser: false,
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
  }),
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = '';
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    }
  }
}
</script>

<style>

</style>
