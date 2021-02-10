<template>
  <div>
    <div class="w-3/4 mx-auto mt-20">
      <NuxtLink :to="actus[0].slug">
        <h2 class="text-center">
          {{ actus[0].title }}
        </h2>
      </NuxtLink>
      <img :src="actus[0].image" alt="">
    </div>
    <div>
      <h3>{{ actus[1].title }}</h3>
      <img :src="actus[1].image" alt="">
    </div>
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
