<template>
  <section class="assign-msgtype">
    <a @click="triggerModal">Přiřadit zprávy</a>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

        <h3>Vyberte typy zpráv k přiřazení</h3>

        <div class="field">
          <div class="control search">
            <input class="input" type="text" placeholder="Hledat zprávu dle názvu..." @input="update">
          </div>
        </div>

        <div v-if="filteredMsgTypes.length != 0">
          <div class="inputGroup" v-for="c in filteredMsgTypes" :key="c._id">
            <p-check v-model="checkedMsgTypes" :value="c._id" color="info" class="p-icon p-smooth">
              <i slot="extra" class="icon fa fa-check"></i>
              {{ c.name }} ({{c.technology}})
            </p-check>
          </div>
        </div>
        <div v-else>
          <p>Nebyly nalezeny žádné typy zpráv k přiřazení...</p>
        </div>

        <div class="field is-horizontal controls">
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" @click="assignMessageTypes">
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
  name: 'assign-message-types',
  props: ['contactMsgTypes', 'contactId'],
  data () {
    return {
      isActive: false,
      search: '',
      checkedMsgTypes: []
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    assignMessageTypes: function () {
      this.$store.dispatch('tryAssignMessageTypes', { siteId: this.site._id, contactId: this.contactId, msgtypes: this.checkedMsgTypes, router: this.$router })
      this.checkedMsgTypes = []
      this.isActive = !this.isActive
    },
    update: _.debounce(function (e) {
      this.search = e.target.value
    }, 300)
  },
  computed: {
    filteredMsgTypes () {
      return this.assignableMsgTypes.filter((msgtype) => {
        return msgtype.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    },
    site () {
      return this.$store.getters.selectedSite
    },
    messageTypes () {
      return this.$store.getters.messageTypes
    },
    isLoading () {
      return this.$store.getters.isLoading
    },
    assignableMsgTypes () {
      function comparer (otherArray) {
        return function (current) {
          return otherArray.filter(function (other) {
            return other._id === current._id
          }).length === 0
        }
      }
      return this.messageTypes.filter(comparer(this.contactMsgTypes))
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
.inputGroup {
  font-size: 18px;
  margin: 10px;
}
.controls {
  margin-top: 15px;
}
.search {
  margin-top: 10px;
}
.add-button {
  span {
    color: #5996c6;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
