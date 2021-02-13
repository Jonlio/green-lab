<template>
  <div class="space-y-12 w-3/4 mx-auto">
    <!--Actualités-->
    <div>
      <div class="mb-10">
        <NuxtLink :to="actus[1].slug">
          <img :src="actus[1].image" alt="">
        </NuxtLink>
      </div>
      <div class="flex flex-col text-white font-bold w-2/3 mx-auto space-y-4">
        <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
          <h3 class="p-3 w-2/3">
            {{ actus[0].title }}
          </h3>
          <img :src="actus[0].image" alt="" class="w-1/3">
        </div>
        <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
          <h3 class="p-3 w-2/3">
            {{ actus[2].title }}
          </h3>
          <img :src="actus[2].image" alt="" class="w-1/3">
        </div>
        <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
          <h3 class="p-3 w-2/3">
            {{ actus[3].title }}
          </h3>
          <img :src="actus[3].image" alt="" class="w-1/3">
        </div>
      </div>
    </div>
    <!--Services Pratiques-->
    <div>
      <div class="space-y-6">
        <h2 class="text-center text-3xl text-blue-900 font-black">
          Services pratiques
        </h2>
        <ul class="flex grid grid-cols-4 gap-3 text-center">
          <li>
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" :class="{'text-blue-900 bg-white': openTab !== 1, 'text-white bg-blue-900': openTab === 1}" @click="toggleTabs(1)">
              Habiter
            </a>
          </li>
          <li>
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" :class="{'text-blue-900 bg-white': openTab !== 2, 'text-white bg-blue-900': openTab === 2}" @click="toggleTabs(2)">
              Visiter
            </a>
          </li>
          <li>
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" :class="{'text-blue-900 bg-white': openTab !== 3, 'text-white bg-blue-900': openTab === 3}" @click="toggleTabs(3)">
              Etudier
            </a>
          </li>
          <li>
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" :class="{'text-blue-900 bg-white': openTab !== 4, 'text-white bg-blue-900': openTab === 4}" @click="toggleTabs(4)">
              Affaires
            </a>
          </li>
        </ul>
        <div class="relative bg-white mb-6 shadow-lg rounded">
          <div class="px-4 py-5 flex-auto text-center">
            <div class="font-bold">
              <ul class="grid gap-8 grid-cols-2 md:grid-cols-4" :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <li>
                  <img src="~/assets/culture.png" alt="" class="mx-auto mb-3">
                  <h3>Culture et patrimoine</h3>
                </li>
                <li>
                  <img src="~/assets/commerces.png" alt="" class="mx-auto mb-3">
                  <h3>Commerces et marchés</h3>
                </li>
                <li>
                  <img src="~/assets/transport.png" alt="" class="mx-auto mb-3">
                  <h3>Transport et voirie</h3>
                </li>
                <li>
                  <img src="~/assets/education.png" alt="" class="mx-auto mb-3">
                  <h3>Education et jeunesse</h3>
                </li>
                <li>
                  <img src="~/assets/swim.png" alt="" class="mx-auto mb-3">
                  <h3>Sports</h3>
                </li>
                <li>
                  <img src="~/assets/logement.png" alt="" class="mx-auto mb-3">
                  <h3>Logement et urbanisme</h3>
                </li>
                <li>
                  <img src="~/assets/famille.jpg" alt="" class="mx-auto mb-3">
                  <h3>Parcs et Jardins</h3>
                </li>
                <li>
                  <img src="~/assets/securite.png" alt="" class="mx-auto mb-3">
                  <h3>Situations d'urgences</h3>
                </li>
              </ul>
              <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <ul class="grid gap-4 grid-cols-2 md:grid-cols-4" :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                  <li>
                    <img src="~/assets/culture.png" alt="" class="mx-auto mb-3">
                    <h3>Visiter Tours</h3>
                  </li>
                  <li>
                    <img src="~/assets/commerces.png" alt="" class="mx-auto mb-3">
                    <h3>Culture Patrimoine</h3>
                  </li>
                  <li>
                    <img src="~/assets/swim.png" alt="" class="mx-auto mb-3">
                    <h3>Activité Loisirs</h3>
                  </li>
                  <li>
                    <img src="~/assets/sante.png" alt="" class="mx-auto mb-3">
                    <h3>En cas d'urgence</h3>
                  </li>
                  <li>
                    <img src="~/assets/numerique.jpg" alt="" class="mx-auto mb-3">
                    <h3>Numérique</h3>
                  </li>
                </ul>
              </div>
              <div :class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <ul class="grid gap-4 grid-cols-2 md:grid-cols-4" :class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                  <li>
                    <img src="~/assets/education.png" alt="" class="mx-auto mb-3">
                    <h3>Education Jeunesse</h3>
                  </li>
                  <li>
                    <img src="~/assets/sante.png" alt="" class="mx-auto mb-3">
                    <h3>Santé Jeunes</h3>
                  </li>
                  <li>
                    <img src="~/assets/swim.png" alt="" class="mx-auto mb-3">
                    <h3>Sport Jeunes</h3>
                  </li>
                  <li>
                    <img src="~/assets/bienvenue.jpg" alt="" class="mx-auto mb-3">
                    <h3>Loisirs Jeunes</h3>
                  </li>
                </ul>
              </div>
              <div :class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <ul class="grid gap-4 grid-cols-2" :class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                  <li>
                    <img src="~/assets/usine.jpg" alt="" class="mx-auto mb-3">
                    <h3>Affaires et entreprises</h3>
                  </li>
                  <li>
                    <img src="~/assets/logement.png" alt="" class="mx-auto mb-3">
                    <h3>Urbanisme - Recensement</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center font-bold mt-6">
        <p class="mb-2">
          Vous cherchez autre chose?
        </p>
        <a class="w-2/3 mx-auto bg-blue-900 text-white p-3 flex justify-center rounded hover:bg-blue-600" href="#">Autres services et informations pratiques</a>
      </div>
    </div>
    <!--Agenda-->
    <h2 class="text-center text-3xl text-blue-900 font-black">
      Agenda
    </h2>
    <div class="flex flex-col text-white font-bold w-2/3 mx-auto space-y-4">
      <div>
        <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
          <div class="p-3 w-2/3">
            <h3>
              {{ agendas[0].title }}
            </h3>
            <p>{{ agendas[0].lieu }}</p>
          </div>
          <img :src="agendas[0].image" alt="" class="w-1/3">
        </div>
      </div>
      <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
        <div class="p-3 w-2/3">
          <h3>
            {{ agendas[1].title }}
          </h3>
          <p>{{ agendas[1].lieu }}</p>
        </div>
        <img :src="agendas[1].image" alt="" class="w-1/3">
      </div>
      <div class="flex flex-row-reverse bg-blue-900 rounded-md p-2">
        <div class="p-3 w-2/3">
          <h3>
            {{ agendas[2].title }}
          </h3>
          <p>{{ agendas[2].lieu }}</p>
        </div>
        <img :src="agendas[2].image" alt="" class="w-1/3">
      </div>
    </div>
    <!--Action municipale-->
    <h2 class="text-center text-3xl text-blue-900 font-black">
      Action municipale
    </h2>
    <div>
      <p>
        Le Maire Emmanuel Denis et son équipe d'adjoints et conseillers municipaux oeuvrent chaque jour au service de la ville et de tous ses administrés.
      </p>
      <a class="w-3/12 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600" href="#">Vos élus</a>
    </div>
    <div>
      <p>
        Pour connaître l'action de vos élus et la vie de votre Ville, vous pouvez regarder en direct ou en différé les conseils municipaux ou consulter toutes les actualités.
      </p>
      <a class="w-3/5 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600" href="#">Le conseil municipal en vidéo</a>
    </div>
    <div>
      <p>
        La ville de Tours, c'est aussi des projets, des jumelages et des partenariats avec des pays et villes étrangères
      </p>
      <a class="w-3/6 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600" href="#">Tours à l'International</a>
    </div>
    <div>
      <p>
        Le service presse est à la disposition des journalistes professionnels dans leurs recherches de contacts ou d'informations. Suivez le lien vers l'Espace Presse de la Ville et retrouvez le Tours Médias, les communiqués, les dossiers de presse, les retours presse locaux et nationaux...
      </p>
      <a class="w-2/6 bg-blue-900 text-white font-bold p-3 flex justify-center rounded hover:bg-blue-600" href="#">Espace Presse</a>
    </div>
    <!--Image du jour
    <div class="flex flex-col text-white font-bold w-2/3 mx-auto space-y-4">
      <h2 class="text-blue-900 text-3xl text-center font-black">
        L'image du jour
      </h2>
      <img :src="actus[0].image" alt="" class="w-1/3">
      <img :src="actus[1].image" alt="" class="w-1/3">
      <img :src="actus[2].image" alt="" class="w-1/3">
    </div>-->
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const actus = await $content('actu').fetch()
    const agendas = await $content('agenda').fetch()
    return {
      actus,
      agendas
    }
  },
  data () {
    return {
      selected: false,
      openTab: 1
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  methods: {
    updateMenu () {
      this.selected = !this.selected
    },
    toggleTabs (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>

<style>
</style>
