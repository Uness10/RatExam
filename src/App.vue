<template>
  <div class="home">
    <!-- Header -->
    <NavBar /> <!-- Include NavBar component here -->
  
    <RouterView/>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-2 mt-4">
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 Votify</p>
        </div>
        <div>
          <ul class="flex items-center">

            <li class="mr-6">
              <router-link to="/legal" class="hover:text-gray-400">Mentions Légales</router-link>
            </li>
            <li class="mr-6">
              <router-link to="/social" class="hover:text-gray-400">Réseaux Sociaux</router-link>
            </li>
            <!-- Contact Section -->
            <li>
              <a href="mailto:younessanouar57@gmail.com" class="hover:text-gray-400">Contactez-nous</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Import NavBar component

export default {
  components: {
    NavBar // Register NavBar component
  }
};
</script>

<style scoped>
/* Scoped styles */
</style>
