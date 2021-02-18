<template>
  <div>
    <h2 class="text-center text-3xl text-blue-900 font-black">
      Agenda
    </h2>
    <div class="flex flex-col text-white font-bold w-2/3 mx-auto space-y-4">
      <div v-for="agenda in agendas" :key="agenda.title" class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
        <div class="p-3 w-2/3">
          <h3>
            {{ agenda.title }}
          </h3>
          <p>{{ agenda.lieu }}</p>
        </div>
        <img :src="agenda.image" alt="" class="w-1/3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const agendas = await $content('agenda').fetch()
    return {
      agendas
    }
  }
}
</script>

<style scoped>
</style>
