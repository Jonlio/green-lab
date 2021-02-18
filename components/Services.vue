<template>
  <div>
    <div class="space-y-6">
      <h2 class="text-center text-3xl text-blue-900 font-black">
        Services pratiques
      </h2>
      <ul class="flex grid grid-cols-4 gap-3 text-center">
        <li>
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-blue-900 bg-white': openTab !== 1,
              'text-white bg-blue-900': openTab === 1,
            }"
            @click="toggleTabs(1)"
          >
            Habiter
          </a>
        </li>
        <li>
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-blue-900 bg-white': openTab !== 2,
              'text-white bg-blue-900': openTab === 2,
            }"
            @click="toggleTabs(2)"
          >
            Visiter
          </a>
        </li>
        <li>
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-blue-900 bg-white': openTab !== 3,
              'text-white bg-blue-900': openTab === 3,
            }"
            @click="toggleTabs(3)"
          >
            Etudier
          </a>
        </li>
        <li>
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            :class="{
              'text-blue-900 bg-white': openTab !== 4,
              'text-white bg-blue-900': openTab === 4,
            }"
            @click="toggleTabs(4)"
          >
            Affaires
          </a>
        </li>
      </ul>
      <div class="relative bg-white mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto text-center">
          <div class="font-bold">
            <ul
              class="grid gap-8 grid-cols-2 md:grid-cols-4"
              :class="{ hidden: openTab !== 1, block: openTab === 1 }"
            >
              <li>
                <img src="~/assets/culture.png" alt="" class="mx-auto mb-3">
                <h3>Culture et patrimoine</h3>
              </li>
              <li>
                <img
                  src="~/assets/commerces.png"
                  alt=""
                  class="mx-auto mb-3"
                >
                <h3>Commerces et marchés</h3>
              </li>
              <li>
                <img
                  src="~/assets/transport.png"
                  alt=""
                  class="mx-auto mb-3"
                >
                <h3>Transport et voirie</h3>
              </li>
              <li>
                <img
                  src="~/assets/education.png"
                  alt=""
                  class="mx-auto mb-3"
                >
                <h3>Education et jeunesse</h3>
              </li>
              <li>
                <img src="~/assets/swim.png" alt="" class="mx-auto mb-3">
                <h3>Sports</h3>
              </li>
              <li>
                <img
                  src="~/assets/logement.png"
                  alt=""
                  class="mx-auto mb-3"
                >
                <h3>Logement et urbanisme</h3>
              </li>
              <li>
                <img src="~/assets/famille.jpg" alt="" class="mx-auto mb-3">
                <h3>Parcs et Jardins</h3>
              </li>
              <li>
                <img
                  src="~/assets/securite.png"
                  alt=""
                  class="mx-auto mb-3"
                >
                <h3>Situations d'urgences</h3>
              </li>
            </ul>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <ul
                class="grid gap-4 grid-cols-2 md:grid-cols-4"
                :class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <li>
                  <img
                    src="~/assets/culture.png"
                    alt=""
                    class="mx-auto mb-3"
                  >
                  <h3>Visiter Tours</h3>
                </li>
                <li>
                  <img
                    src="~/assets/commerces.png"
                    alt=""
                    class="mx-auto mb-3"
                  >
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
                  <img
                    src="~/assets/numerique.jpg"
                    alt=""
                    class="mx-auto mb-3"
                  >
                  <h3>Numérique</h3>
                </li>
              </ul>
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <ul
                class="grid gap-4 grid-cols-2 md:grid-cols-4"
                :class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <li>
                  <img
                    src="~/assets/education.png"
                    alt=""
                    class="mx-auto mb-3"
                  >
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
                  <img
                    src="~/assets/bienvenue.jpg"
                    alt=""
                    class="mx-auto mb-3"
                  >
                  <h3>Loisirs Jeunes</h3>
                </li>
              </ul>
            </div>
            <div :class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <ul
                class="grid gap-4 grid-cols-2"
                :class="{ hidden: openTab !== 4, block: openTab === 4 }"
              >
                <li>
                  <img src="~/assets/usine.jpg" alt="" class="mx-auto mb-3">
                  <h3>Affaires et entreprises</h3>
                </li>
                <li>
                  <img
                    src="~/assets/logement.png"
                    alt=""
                    class="mx-auto mb-3"
                  >
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
      <a
        class="w-2/3 mx-auto bg-blue-900 text-white p-3 flex justify-center rounded hover:bg-blue-600"
        href="#"
      >Autres services et informations pratiques</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: false,
      openTab: 1
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

<style scoped>
</style>
