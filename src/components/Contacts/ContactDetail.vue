<template>
  <article>
    <loading v-if="isLoading" />
    <div v-else>
      <div class="contact-detail" v-if="contact != false">
        <div clas="row">
          <div class="title col-xs-12">
            <h2>
              <edit-contact class="edit-contact pull-left" :name="this.contact.name" :phone="this.contact.phone" :email="this.contact.email" :id="this.contact._id" />
              {{ contact.name }}
              <delete-contact class="delete-contact pull-right" :id="this.contact._id" />
            </h2>
          </div>

          <div class="col-xs-12 col-md-6">
            <table class="table is-fullwidth contact-detail-table centered">
              <thead>
                <tr>Detail kontaktu</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jméno</td>
                  <td>{{ contact.name }}</td>
                </tr>
                <tr>
                  <td>Telefon</td>
                  <td>{{ contact.phone }}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{{ contact.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div class="contact-detail" v-else>
        Vyberte kontakt!
      </div>
    </div>
  </article>
</template>


<script>
import Loading from '../Loading.vue'
import DeleteContact from './DeleteContact.vue'
import EditContact from './EditContact.vue'

export default {
  name: 'contact-detail',
  computed: {
    contact () {
      return this.$store.getters.selectedContact
    },
    contacts () {
      return this.$store.getters.contacts
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  components: {
    Loading,
    DeleteContact,
    EditContact
  }
}
</script>

<style scoped lang="scss">
.contact-detail {
  height: 100%;
  padding: 12px 15px;
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  h2 {
    padding: 20px 0 0 0;
    font-size: 18px;
    color: #5996c6;
    .delete-contact {
      width: 24px;
      height: 24px;
    }
    .edit-contact {
      width: 24px;
      height: 24px;
    }
  }
}
table {
  thead {
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #ededed;
    color: #343434;
    font-size: 16px;
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
  .contact-detail {
    border-width: 0 0 5px 0;
  }
}
</style>
