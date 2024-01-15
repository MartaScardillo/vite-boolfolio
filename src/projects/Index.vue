<template>
    <div>
      <div class="container">
        <h1>Progetti</h1>
      </div>
  
      <div class="container">
        <div class="grid">
          <ProjectCard class="card post-card" v-for="post in posts" :project="post" :key="post.id" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProjectCard from '../components/ProjectCard.vue';
  
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        posts: [],
        BASE_URL: 'http://127.0.0.1:8000/api'
      };
    },
    methods: {
      fetchPosts() {
        axios.get(`${this.BASE_URL}/projects`).then((res) => {
          console.log(res);
          this.posts = res.data.projects;
        });
      }
    },
    created() {
      this.fetchPosts();
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
  </style>
  