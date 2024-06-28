<template>
    <div class="card">
      <img :src="Event.image" alt="Event Image" class="card-img" />
      <div class="card-title">{{ Event.nom }}</div>
      <div class="card-subtitle">{{ Event.description }}</div>
      <div class="card-tags">
        <span v-for="tag in Event.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="card-actions">
        <router-link :to="`/Events/${Event.id}`">View More</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      Event: {
        type: Object,
        required: true
      }
    },
    mounted() {
      console.log(this.Event.id);
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    max-width: 400px;
    margin: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.5em;
    margin: 16px;
    font-weight: bold;
    color: #333;
  }
  
  .card-subtitle {
    font-size: 1em;
    color: #666;
    margin: 0 16px 16px 16px;
  }
  
  .card-tags {
    margin: 16px;
  }
  
  .tag {
    display: inline-block;
    background-color: #e0e0e0;
    color: #555;
    border-radius: 12px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 0.9em;
  }
  
  .card-actions {
    padding: 16px;
    border-top: 1px solid #eee;
  }
  
  .card-actions a {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
  }
  
  .card-actions a:hover {
    text-decoration: underline;
  }
  </style>
  