<template>
  <div class="space-y-12 w-3/4 mx-auto">
    <!--Actualités-->
    <div>
      <div class="mb-10">
        <img :src="affiche[0].image" alt="">
      </div>
      <div class="flex flex-col text-white font-bold w-2/3 mx-auto space-y-4">
        <div v-for="actu in actus" :key="actu.title" class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
          <h3 class="p-3 w-2/3">
            {{ actu.title }}
          </h3>
          <img :src="actu.image" alt="" class="w-1/3">
        </div>
      </div>
    </div>
    <!--Services Pratiques-->
    <Services />
    <!--Agenda-->
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
    <!--Action municipale-->
    <h2 class="text-center text-3xl text-blue-900 font-black">
      Action municipale
    </h2>
    <div>
      <p>
        Le Maire Emmanuel Denis et son équipe d'adjoints et conseillers
        municipaux oeuvrent chaque jour au service de la ville et de tous ses
        administrés.
      </p>
      <a
        class="w-3/12 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600"
        href="#"
      >Vos élus</a>
    </div>
    <div>
      <p>
        Pour connaître l'action de vos élus et la vie de votre Ville, vous
        pouvez regarder en direct ou en différé les conseils municipaux ou
        consulter toutes les actualités.
      </p>
      <a
        class="w-3/5 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600"
        href="#"
      >Le conseil municipal en vidéo</a>
    </div>
    <div>
      <p>
        La ville de Tours, c'est aussi des projets, des jumelages et des
        partenariats avec des pays et villes étrangères
      </p>
      <a
        class="w-3/6 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600"
        href="#"
      >Tours à l'International</a>
    </div>
    <div>
      <p>
        Le service presse est à la disposition des journalistes professionnels
        dans leurs recherches de contacts ou d'informations. Suivez le lien vers
        l'Espace Presse de la Ville et retrouvez le Tours Médias, les
        communiqués, les dossiers de presse, les retours presse locaux et
        nationaux...
      </p>
      <a
        class="w-2/6 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600"
        href="#"
      >Espace Presse</a>
    </div>
    <!--Image du jour-->
    <div>
      <h2 class="text-blue-900 text-3xl text-center font-black mb-5">
        L'image du jour
      </h2>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="photo in photos" :key="photo.title">
          <img :srcset="photo.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const affiche = await $content('affiche').fetch()
    const actus = await $content('actu').fetch()
    const agendas = await $content('agenda').fetch()
    const photos = await $content('photo').fetch()
    return {
      affiche,
      actus,
      agendas,
      photos
    }
  },
  head () {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
</style>
