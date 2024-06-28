<template>
  <div class="home">
    <div class="intro">
      <h1>Welcome to {{ appName }}</h1>
      <p>{{ appSubtitle }}</p>
    </div>

    <section class="features">
      <h2>Key Features</h2>
      <div class="feature">
        <h3>Express Your Votes</h3>
        <p>Vote on UM6P events to express your interest or support.</p>
      </div>
      <div class="feature">
        <h3>Event Details</h3>
        <p>Get detailed information about upcoming events.</p>
      </div>
      <!-- Add more features as per your application -->
    </section>

    <section class="how-it-works">
      <h2>How It Works</h2>
      <ol>
        <li>Sign up with your UM6P email.</li>
        <li>Browse upcoming events and vote on your favorites.</li>
        <li>Engage with the community through comments and discussions.</li>
      </ol>
    </section>

    <section class="benefits">
      <h2>Benefits</h2>
      <div class="benefit">
        <h3>Amplify Your Voice</h3>
        <p>Influence campus events and initiatives that matter to you.</p>
      </div>
      <div class="benefit">
        <h3>Stay Informed</h3>
        <p>Never miss out on exciting UM6P events and opportunities.</p>
      </div>
      <!-- Add more benefits as per your application -->
    </section>

    <section class="call-to-action">
      <h2>Ready to Get Started?</h2>
      <button @click="handleSignUp">Sign Up Now</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      appName: 'Your Application Name',
      appSubtitle: 'Designed for UM6P students to express their votes about UM6P events'
    };
  },
  methods: {
    handleSignUp() {
      // Logic to handle sign up action
      this.$router.push('/welcome')
      // You can emit an event or navigate to sign up page, etc.
    }
  }
};
</script>

<style scoped>
/* Scoped styles specific to this component */
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 20px;
}

.features, .how-it-works, .benefits, .call-to-action {
  margin-bottom: 40px;
}

.feature, .benefit {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
