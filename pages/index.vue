<template>
  <div>
    <h1>Mairie Green</h1>
    <ul v-for="actu of actus" :key="actu.slug">
      <li>
        <NuxtLink :to="actu.slug">
          {{ actu.title }}
        </NuxtLink>
      </li>
      <li>
        <img :src="actu.image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const actus = await $content('actu').fetch()

    return {
      actus
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
