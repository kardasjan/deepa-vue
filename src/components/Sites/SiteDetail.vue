<template>
  <article>
    <div class="site-detail" v-if="site != null">
      <site-detail-menu></site-detail-menu>
      <div class="content">
        <h2>
          {{ site.name }}
          <span>{{ site._id }}</span>
        </h2>
        <div class="columns">
          <div class="column is-6">
            <table class="table people">
              <thead>
                <tr>Osadní výbor</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Petr Winkler</td>
                  <td>+420 712 123 556</td>
                  <td>winkler@gmail.com</td>
                </tr>
                <tr>
                  <td>Jaroslav Ševčíř</td>
                  <td>+420 711 321 516</td>
                  <td>jar13sev@seznam.cz</td>
                </tr>
              </tbody>
            </table>

            <table class="table address">
              <thead>
                <tr>Adresa</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Praha 6, Černý Most, 102 31</td>
                  <td><a href="#">Ukázat na mapě</a></td>
                </tr>
                <tr>
                  <td>Počernická 14/132</td>
                </tr>
              </tbody>
            </table>

            <table class="table informations">
              <thead>
                <tr>Informace o objektu</tr>
              </thead>
              <tbody>
                <tr>
                  <td>IČO</td>
                  <td>12398765</td>
                </tr>
                <tr>
                  <td>IP Adresa</td>
                  <td>67.21.211.42</td>
                </tr>
              </tbody>
            </table>

            <table class="table additional-informations">
              <thead>
                <tr>Doplňující informace</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Počet vchodů</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Odkaz na Google disk</td>
                  <td><a href="http://drive.google.com/asdf">Odkaz  </a></td>
                </tr>
                <tr>
                  <td>Poskytovatel internetu</td>
                  <td>Poda</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="column is-6">
            <table class="table contract">
              <thead>
                <tr>Servisní smlouva</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Typ</td>
                  <td>Měsíční</td>
                </tr>
                <tr>
                  <td>21.2.2016</td>
                  <td>22.2.2017</td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="#">Odkaz na smlouvu</a></td>
                </tr>
              </tbody>
            </table>
            <circular-countdown :dateFrom="'2016-02-21'" :dateTo="'2017-10-22'"></circular-countdown>
          </div>
        </div>
        <p v-for="(item, key, index) in site" :key="index">{{ item }}</p>
      </div>
    </div>
    <div v-else>
      Vyberte objekt!
    </div>
  </article>
</template>

<script>
import SiteDetailMenu from './SiteDetailMenu.vue'
import CircularCountdown from './CircularCountdown.vue'

export default {
  name: 'site-detail',
  computed: {
    site () {
      return this.$store.getters.selectedSite
    },
    sites () {
      return this.$store.getters.sites
    }
  },
  components: {
    SiteDetailMenu,
    CircularCountdown
  }
}
</script>

<style scoped lang="scss">
.site-detail {
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  padding: 15px 20px 0 0;
}
.content {
  padding: 20px 0 0 8px;
  h2 {
    font-size: 18px;
    color: #5996c6;
    span {
      font-size: 12px;
      color: #aeaeae;
      padding: 0 0 0 12px;
    }
  }
  .columns {
    padding: 15px 0 0 0;
  }
}
table {
  thead {
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #ededed;
    color: #343434;
    font-size: 12px;
  }
  tbody {
    font-size: 12px;
    color: #aeaeae;
    td {
      border: none;
    }
  }
}
</style>