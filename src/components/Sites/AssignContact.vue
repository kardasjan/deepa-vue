<template>
  <section class="assign-contact">
    <a @click="triggerModal">Přiřadit kontakt</a>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

        <h3>Vyberte kontakty k přiřazení</h3>

        <div class="field">
          <div class="control search">
            <input class="input" type="text" placeholder="Hledat kontakt dle názvu..." @input="update">
          </div>
        </div>

        <div v-if="filteredContacts.length != 0">
          <div class="inputGroup" v-for="c in filteredContacts" :key="c._id">
            <p-check v-model="checkedContacts" :value="c._id" color="info" class="p-icon p-smooth">
              <i slot="extra" class="icon fa fa-check"></i>
              {{ c.name }}
            </p-check>
          </div>
        </div>
        <div v-else>
          <p>Nebyly nalezeny žádné kontakty k přiřazení...</p>
        </div>

        <div class="field is-horizontal controls">
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" @click="assignContacts">
                  Přiřadit
                </a>
              </p>
              <p class="control">
                <a class="button is-light" @click="triggerModal">
                  Zrušit
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button class="modal-close is-large" aria-label="close" @click="triggerModal"></button>
    </div>
  </section>
</template>

<script>
import _ from 'lodash/lodash.js'
export default {
  name: 'assign-contact',
  data () {
    return {
      isActive: false,
      search: '',
      checkedContacts: []
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    assignContacts: function () {
      this.$store.dispatch('tryAssignContacts', { siteId: this.site._id, contacts: this.checkedContacts, router: this.$router })
      this.checkedContacts = []
      this.isActive = !this.isActive
    },
    update: _.debounce(function (e) {
      this.search = e.target.value
    }, 300)
  },
  computed: {
    filteredContacts () {
      return this.assignableContacts.filter((contact) => {
        return contact.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    },
    assignableContacts () {
      return this.$store.getters.assignableContacts
    },
    site () {
      return this.$store.getters.selectedSite
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style scoped lang="scss">
.modal-content {
  background: white;
  padding: 20px 20px;
}
h3 {
  font-size: 20px;
}
.controls {
  margin-top: 15px;
}
.inputGroup {
  font-size: 18px;
  margin: 10px;
}
.search {
  margin-top: 10px;
}
</style>
