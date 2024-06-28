<template>
  <div class="container mx-auto py-10 px-4 min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Let's get started!</h1>
    <div class="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
      <div v-if="showLogin">
        <h2 class="text-2xl font-bold text-center text-purple-400 mb-4">Login</h2>
        <LoginForm @login="enterForum" />
        <p class="text-center text-gray-600 mt-4">No account yet? <span @click="showLogin = false" class="text-purple-500 cursor-pointer">Sign Up</span> instead.</p>
      </div>
      <div v-else>
        <h2 class="text-2xl font-bold text-center text-purple-400 mb-4">Sign Up</h2>
        <SignupForm @signup="enterForum" />
        <p class="text-center text-gray-600 mt-4">Already registered? <span @click="showLogin = true" class="text-purple-500 cursor-pointer">Login</span> instead.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Welcome',
  components: { SignupForm, LoginForm },
  data() {
    return {
      showLogin: true
    };
  },
  methods: {
    enterForum() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
