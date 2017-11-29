<template>
  <section class="add-site">
    <div class="add-site-button" @click="triggerModal"></div>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Název</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" :value="name">
                <span class="icon is-small is-left">
                  <i class="fa fa-institution"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">IČO</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="73691723" :value="ico">
                <span class="icon is-small is-left">
                  <i class="fa fa-id-cart-o"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Fáze</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>Servisní smlouva</option>
                    <option>Výstavba</option>
                    <option>Audit</option>
                    <option>Jiné</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary">
                  Vytvořit objekt
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
export default {
  name: 'add-site',
  data () {
    return {
      isActive: false,
      name: '',
      ico: ''
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.add-site-button {
  background: url('../../assets/img/add-site.png');
  height: 30px;
  width: 30px;
}
.modal-content {
  background: white;
}
</style>
