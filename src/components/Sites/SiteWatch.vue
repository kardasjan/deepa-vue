<template>
  <article>
    <loading v-if="isLoading && site == false" />
    <div v-else>
      <div class="site-watch" v-if="site != false">
        <site-watch-menu></site-watch-menu>
        <div clas="row">
          <div class="title col-xs-12">
            <h2>
              {{ site.name }}
            </h2>
          </div>

          <ExpandTab :title="contact.contactId.name" :contactId="contact.contactId._id" :contactMsgTypes="contact.messageTypes" v-for="contact in site.contacts" :key="contact.contactId._id">
            <!-- <assigned-contact-menu :contactId="contact.contactId._id" :contactMsgTypes="contact.messageTypes" :title="contact.contactId.name" /> -->

            <table class="table">
              <thead>
                <th>Název</th>
                <th>Technologie</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="msgType in contact.messageTypes" :key="msgType._id">
                  <td>{{ msgType.name }}</td>
                  <td>{{ msgType.technology }}</td>
                  <td><unassign-message-type :siteId="site._id" :contactId="contact.contactId._id" :id="msgType._id" :title="msgType.name" /></td>
                </tr>
              </tbody>
            </table>
          </ExpandTab>
        </div>
      </div>
      <div class="site-watch" v-else>
        Vyberte objekt!
      </div>
    </div>
  </article>
</template>


<script>
import Loading from '../Loading.vue'
import SiteWatchMenu from './SiteWatchMenu.vue'
import ExpandTab from './ExpandTab.vue'
import UnassignMessageType from './UnassignMessageType.vue'

export default {
  name: 'site-watch',
  computed: {
    site () {
      return this.$store.getters.selectedSite
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  components: {
    Loading,
    SiteWatchMenu,
    ExpandTab,
    UnassignMessageType
  }
}
</script>

<style scoped lang="scss">
.site-watch {
  height: 100%;
  padding: 12px 15px;
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  h2 {
    padding: 20px 0 0 0;
    font-size: 18px;
    color: #5996c6;
  }
}
table {
  thead {
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #ededed;
    color: #343434;
    font-size: 14px;
  }
  tbody {
    font-size: 14px;
    color: #aeaeae;
    td {
      border: none;
    }
  }
}
@media (max-width: 768px) {
  .site-detail {
    border-width: 0 0 5px 0;
  }
}
</style>
