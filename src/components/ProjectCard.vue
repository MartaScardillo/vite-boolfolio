<template>
    <div class="card card-post">
      <h3>{{ project.name }}</h3>
      <p v-if="project.image_path">
        <img :src="project.image_path" alt="Project Image" />
      </p>
      <p v-if="project.description">{{ project.description }}</p>
      <p v-if="project.type">{{ project.type.name }}</p>
      <div v-if="project.technologies.length > 0">
        <h4>Tecnologie:</h4>
        <ul>
          <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .card.card-post {
    padding: 20px;
    border-radius: 8px;
    background: #dedede;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  