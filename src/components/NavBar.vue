<template>
  <nav class="bg-gradient-to-r from-blue-200 to-blue-600 text-white shadow-sm relative z-10 mb-4">
    <div class="container mx-auto px-4 py-2 flex items-center justify-between">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 text-yellow-300 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <router-link to="/" class="text-2xl font-semibold">Your Brand</router-link>
      </div>
      <button
        class="block lg:hidden p-2 border rounded text-white border-white"
        @click="toggleMenu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div class="hidden lg:flex lg:items-center lg:w-auto">
        <ul class="lg:flex lg:space-x-4 text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/events" v-if="logged">Events</router-link>
          </li>

          <li class="nav-item" v-if="logged">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item" v-else>
            <router-link class="nav-link" to="/welcome">Enter</router-link>
          </li>
          <li class="nav-item" v-if="logged">
            <a href="#" class="nav-link" @click.prevent="handleLogout">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="lg:hidden absolute w-full bg-blue-600 text-white">
      <ul class="text-center py-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/events">Events</router-link>
        </li>

        <li class="nav-item" v-if="logged">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item" v-else>
          <router-link class="nav-link" to="/welcome">Enter</router-link>
        </li>
        <li class="nav-item" v-if="logged">
          <a href="#" class="nav-link" @click.prevent="handleLogout">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getCurrentUser } from '@/router/index.js'; // Correct the import path if necessary
import useLogout from '../composables/useLogout';

export default {
  name: 'Navbar',
  data() {
    return {
      logged: -1,
      isOpen: false
    };
  },
  async created() {
    const currentUser = await getCurrentUser();
    this.logged = !!currentUser;
    console.log('Logged in status:', this.logged); // Debugging log
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    async handleLogout() {
      try {
        await useLogout();
        this.$router.push('/welcome');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }
  },
  watch: {
    '$route.path': async function() {
      const currentUser = await getCurrentUser();
      this.logged = !!currentUser;
      console.log('Route change - Logged in status:', this.logged); // Debugging log
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.nav-link {
  @apply block py-2 px-4 text-white hover:bg-blue-700 rounded transition-colors duration-300;
}

.nav-item + .nav-item {
  @apply mt-2 lg:mt-0;
}

@media (max-width: 1024px) {
  .nav-item {
    @apply block w-full text-center;
  }
}
</style>
