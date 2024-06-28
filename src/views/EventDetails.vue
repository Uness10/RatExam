<template>
  <div class="event-detail max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn">
    <header class="text-center bg-gradient-to-r from-purple-500 to-teal-500 p-8 text-white text-4xl font-bold border-b-4 border-teal-500">
      <h1>{{ event.title }}</h1>
    </header>
    <div class="event-image">
      <img :src="event.image" alt="Event Image" class="w-full h-auto border-b-4 border-teal-500 animate-zoomIn">
    </div>
    <section class="event-info p-6">
      <h2 class="text-teal-500 text-2xl mb-2">Description</h2>
      <p class="mb-4">{{ event.description }}</p>
      <h2 class="text-teal-500 text-2xl mb-2">Date</h2>
      <p class="mb-4">{{ formattedDate }}</p>
      <h2 class="text-teal-500 text-2xl mb-2">Votes</h2>
      <div class="vote-count flex justify-around my-6">
        <p class="text-lg">Yes: {{ event.yesVotes }}</p>
        <p class="text-lg">No: {{ event.noVotes }}</p>
      </div>
      <div v-if="userHasVoted !== -1">
        <div class="vote-buttons flex justify-center gap-6" v-if="!userHasVoted">
          <button class="yes bg-green-500 text-white px-6 py-3 rounded-full text-xl transition-transform transform hover:-translate-y-1 active:translate-y-0" @click="vote('yes')">Vote Yes</button>
          <button class="no bg-red-500 text-white px-6 py-3 rounded-full text-xl transition-transform transform hover:-translate-y-1 active:translate-y-0" @click="vote('no')">Vote No</button>
        </div>
        <div v-else>
          <p class="text-center text-lg mt-4 text-orange-500">You have already voted for this event.</p>
        </div>
      </div>
    </section>
    <!-- Success Notification -->
    <div v-if="showSuccessNotification" class="absolute bottom-4 left-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg text-center">
      <p>Your vote has been counted successfully!</p>
    </div>
  </div>
</template>

<script>
import { fetchEvent, updateEventVotes } from '@/composables/useFirestore.js';
import getUser from '@/composables/getUser.js';
import { projectFirestore } from '@/firebase/config.js';

export default {
  name: 'EventDetails',
  data() {
    return {
      userId: '',
      event: {
        title: '',
        description: '',
        date: '',
        image: '',
        yesVotes: 0,
        noVotes: 0,
      },
      userHasVoted: -1,
      updateError: '',
      showSuccessNotification: false, // State for success notification
    };
  },
  computed: {
    formattedDate() {
      return new Date(this.event.date).toLocaleString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  methods: {
    async loadEventData() {
    const eventId = this.$route.params.id;
    this.event = await fetchEvent(eventId);

    // Initialize userHasVoted to -1 indicating user's voting status is unknown
    this.userHasVoted = -1;

    // Check if the user has already voted in the event
    for (let v of this.event.votes) {
        if (v.userId === this.userId) {
            this.userHasVoted = 1;
            break;
        }
    }

    // If userHasVoted is still -1, set it to 0 indicating user has not voted
    if (this.userHasVoted === -1) {
        this.userHasVoted = 0;
    }
},

    async vote(type) {
      let data;
      if (type === 'yes') {
        data = {
          yesVotes: this.event.yesVotes + 1
        };
      } else {
        data = {
          noVotes: this.event.noVotes + 1
        };
      }
      const eventId = this.$route.params.id;
      const response = await updateEventVotes(eventId, this.userId, data);
      if (response.success) {
        this.showSuccessNotification = true; // Show success notification
        setTimeout(() => {
          this.showSuccessNotification = false; // Hide after a few seconds
        }, 3000); // Adjust time as needed
        this.loadEventData();
      } else {
        this.updateError = response.error;
      }
    },
    async checkIfUserHasVoted(eventId) {
      const voteRef = projectFirestore.collection('Events').doc(eventId).collection('Votes').doc(this.userId);
      const voteDoc = await voteRef.get();
      this.userHasVoted = voteDoc.exists;
    }
  },
  mounted() {
    const { user } = getUser(); // Use destructuring to get the user ref
    const userId = user.value ? user.value.uid : null; // Safely get the user ID
    this.userId = userId;
    this.loadEventData();
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}

.bg-gold-500 {
  background-color: #FFD700;
}

.text-gold-500 {
  color: #FFD700;
}
</style>
