<template>
  <div>
    <h1>Mairie Green</h1>
    <ul v-for="post of posts" :key="post.slug">
      <li>
        <NuxtLink :to="post.slug">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
