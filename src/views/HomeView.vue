<template>
  <div class="min-h-screen flex flex-col items-center w-full justify-center bg-gradient-to-r from-purple-500 to-indigo-500 py-10">
    <div class="max-w-5xl px-8 py-12 shadow-2xl rounded-xl bg-white bg-opacity-90 transform transition duration-500">
      <div class="text-center mb-10">
        <img src="@/assets/positive-vote.png" alt="logo" class="w-20 h-20 mx-auto mb-4 animate-bounce">
        <h1 class="text-5xl font-extrabold text-gray-900">{{ appName }}</h1>
        <p class="text-gray-700 mt-4">{{ appSubtitle }}</p>
      </div>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Express Your Votes</h3>
            <p class="text-gray-700">Vote on UM6P events to express your interest or support.</p>
          </div>
          <div class="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Event Details</h3>
            <p class="text-gray-700">Get detailed information about upcoming events.</p>
          </div>
          <!-- Add more features as per your application -->
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
        <ol class="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>Sign up with your UM6P email.</li>
          <li>Browse upcoming events and vote on your favorites.</li>
          <li>Engage with the community through comments and discussions.</li>
        </ol>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Amplify Your Voice</h3>
            <p class="text-gray-700">Influence campus events and initiatives that matter to you.</p>
          </div>
          <div class="p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2">Stay Informed</h3>
            <p class="text-gray-700">Never miss out on exciting UM6P events and opportunities.</p>
          </div>
          <!-- Add more benefits as per your application -->
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
        <button @click="handleSignUp" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2">
          Sign Up Now
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      appName: 'Votify',
      appSubtitle: 'Designed for UM6P students to express their votes about UM6P events'
    };
  },
  methods: {
    handleSignUp() {
      // Logic to handle sign up action
      this.$router.push('/welcome');
      // You can emit an event or navigate to sign up page, etc.
    }
  }
};
</script>

<style scoped>
/* Add some global styling for animations */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
