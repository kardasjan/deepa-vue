<template>
  <aside>
    <div class="menu">

      <loading v-if="isLoading && !contacts && contacts.length != 0" />
      <div v-else>
        <div class="field">
          <div class="control search">
            <input class="input" type="text" placeholder="Hledat kontakt dle názvu..." @input="update">
          </div>
        </div>

        <div v-if="filteredContacts.length != 0">
          <scrollbar :items="filteredContacts" class="scrollbar is-hidden-mobile"></scrollbar>
          <contact-list :items="filteredContacts.slice(0,2)" class="is-hidden-tablet"></contact-list>
        </div>
        <div v-else class="has-text-centered">
          Nebyly nalezeny žádné kontakty...
        </div>
      </div>
      <div class="contact-menu is-pulled-right">
        <add-contact />
      </div>

    </div>
  </aside>
</template>

<script>
import Scrollbar from './Scrollbar.vue'
import ContactList from './ContactList.vue'
import _ from 'lodash/lodash.js'
import Loading from '../Loading.vue'
import AddContact from './AddContact.vue'

export default {
  name: 'side-panel',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.search = e.target.value
    }, 300)
  },
  computed: {
    contacts () {
      return this.$store.getters.contacts
    },
    filteredContacts () {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  components: {
    Scrollbar,
    ContactList,
    Loading,
    AddContact
  }
}
</script>

<style scoped lang="scss">
.menu {
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  padding: 12px 0 0 0;
  overflow: hidden;
  height: 100%;
}
.scrollbar {
  overflow: auto;
  height: 75vh;
}
.search {
  width: auto;
  padding: 0 37px 0 37px;
  input {
    box-shadow: none;
    -webkit-box-shadow: none;
    border-color: #ececec;
    border: 1px 1px 1px 1px;
    border-radius: 0;
    font-size: 12px;
    height: 37px;
    color: #222222;
  }
}
.contact-menu {
  padding: 20px 15px 20px 0;
}
@media (max-width: 768px) {
  .menu {
    border-width: 0 0 5px 0;
  }
}
</style>
