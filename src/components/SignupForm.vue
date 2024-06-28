<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
      <form @submit.prevent="handleSignUp" class="space-y-6">
        <div>
          <label for="FullName" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            v-model="FullName"
            id="FullName"
            type="text"
            placeholder="Full Name"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="BirthDate" class="block text-sm font-medium text-gray-700">Birth Date</label>
          <input
            v-model="BirthDate"
            id="BirthDate"
            type="date"
            placeholder="Your Birth Date"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Your Email"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Your Password"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-green-700 to-green-600 btn-pers text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:from-green-700 hover:to-green-500"
          >
            <span v-if="loading">Signing Up...</span>
            <span v-else>Sign Up</span>
          </button>
        </div>
        <div v-if="error" class="text-red-500 text-center mt-4">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useSignup from '@/composables/useSignup';

export default {
  data() {
    return {
      FullName: '',
      BirthDate: '',
      email: '',
      password: '',
      error: null,
      loading: false
    };
  },
  methods: {
    async handleSignUp() {
      const { signup, error } = useSignup();
      this.error = null;
      this.loading = true;
      try {
        if (!this.email.endsWith('@um6p.ma')) {
            throw new Error('Please use your um6p email');
        }
        await signup(this.email, this.password, this.FullName, this.BirthDate);
        if (!error.value) {
          this.$emit('signup');
        } else {
          this.error = error.value;
        }
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
