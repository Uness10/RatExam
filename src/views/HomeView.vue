<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <div class="max-w-4xl px-6 py-12 bg-white shadow-lg rounded-lg">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Welcome to {{ appName }}</h1>
        <p class="text-gray-600">{{ appSubtitle }}</p>
      </div>

      <section class="mb-12">
        <h2 class="text-xl font-semibold mb-4">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-blue-100 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Express Your Votes</h3>
            <p class="text-gray-700">Vote on UM6P events to express your interest or support.</p>
          </div>
          <div class="p-6 bg-blue-100 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Event Details</h3>
            <p class="text-gray-700">Get detailed information about upcoming events.</p>
          </div>
          <!-- Add more features as per your application -->
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-xl font-semibold mb-4">How It Works</h2>
        <ol class="list-decimal list-inside">
          <li>Sign up with your UM6P email.</li>
          <li>Browse upcoming events and vote on your favorites.</li>
          <li>Engage with the community through comments and discussions.</li>
        </ol>
      </section>

      <section class="mb-12">
        <h2 class="text-xl font-semibold mb-4">Benefits</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-green-100 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Amplify Your Voice</h3>
            <p class="text-gray-700">Influence campus events and initiatives that matter to you.</p>
          </div>
          <div class="p-6 bg-green-100 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Stay Informed</h3>
            <p class="text-gray-700">Never miss out on exciting UM6P events and opportunities.</p>
          </div>
          <!-- Add more benefits as per your application -->
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-xl font-semibold mb-4">Ready to Get Started?</h2>
        <button @click="handleSignUp" class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
/* Scoped styles specific to this component */
/* You can add custom scoped styles here if necessary */
</style>
