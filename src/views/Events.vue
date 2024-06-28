
<template>
    <div class="Event-container">
      <div class="Event-grid">
        <div v-for="Event in displayedEvents" :key="Event.id" class="Event-card">
          <EventCard :Event="Event" />        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchEvents } from '@/composables/useFirestore.js';
  import EventCard from '@/components/EventCard.vue';
  //import SearchBar from '@/components/SearchBar.vue';
  import FilterOptions from '@/components/FilterOptions.vue';
  
  export default {
    name: 'Events',
    components: {
      EventCard,
     // SearchBar,
      FilterOptions
    },
    data() {
      return {
        Events: [],
        searchQuery: '',
        selectedCategory: ''
      };
    },
    computed: {
      filteredEvents() {
          let filtered = this.Events;

          if (this.selectedCategory && this.selectedCategory !== 'All') {
              if (this.selectedCategory === 'Voted') {
                  filtered = this.events.filter(event => {
                      // Check if any vote in event.votes has userId equal to this.userId
                      return  event.votes && event.votes.some(vote => vote.userId === this.userId);
                  });
              } else if (this.selectedCategory === 'Unvoted') {
                filtered = this.events.filter(event => {
                      
                      // Check if no vote in event.votes has userId equal to this.userId
                      return event.votes && !event.votes.some(vote => vote.userId === this.userId);
                  });
              }
          } 
        return filtered;
      },
      displayedEvents() {
        return this.filteredEvents.length > 0 ? this.filteredEvents : this.Events;
      }
    },
    methods: {
      handleSearch(query) {
        this.searchQuery = query;
      },
      handleFilter(category) {
        this.selectedCategory = category;
      },
      async fetchEventsData() {
        try {
          const data = await fetchEvents();
          this.Events = data;
        } catch (error) {
          console.error('Error fetching Events:', error);
        }
      }
    },
    mounted() {
      this.fetchEventsData();
    }
  };
  </script>
  
  <style>
  .Event-container {
    width: 100%;
    padding: 20px;
  }
  
  .Event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .Event-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .Event-card:hover {
    transform: translateY(-5px);
  }
  </style>
  
