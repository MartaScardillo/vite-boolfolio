<script>
import axios from 'axios';
export default {
    props: {
        slug: String,
    },
    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api',
        };
    },
    methods: {
        fetchProject() {
            const slug = this.$route.params.slug;
            axios
                .get(`${this.BASE_URL}/projects/${slug}`)
                .then((res) => {
                    this.project = res.data.project;
                })
                .catch((error) => {
                    console.log('project not found', error.response);

                    // if(error.response.status === 404) {
                    //   this.$router.push({ name: 'not-found' })
                    // }
                });
        },
    },
    created() {
        this.fetchProject();
    },
};
</script>

<template>
    <div v-if="project">
        <div class="container">
            <h1>{{ project.title }}</h1>
            <p>{{ project.slug }}</p>
            <p>{{ project.type?.name }}</p>
            <ul class="technologies">
                <li
                    v-for="technology in project.technologies"
                    :key="technology.id"
                >
                    {{ technology.name }}
                </li>
            </ul>
        </div>

        <div class="container" v-html="project.content"></div>
    </div>
</template>

<style lang="scss" scoped>
.technologies {
    padding: 10px 0;
    display: flex;
    gap: 24px;
}
</style>
