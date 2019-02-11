<template>
  <div class="card" :class="{ 'not-expanded': !this.expanded }">

    <header class="card-header" @click="toggleCardState">
      <p class="card-header-title">
        {{title}}
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-up"></i>
        </span>
      </a>
    </header>

    <div class="card-content">
      <assigned-contact-menu :contactId="contactId" :contactMsgTypes="contactMsgTypes" :contactName="title" />      
      <div class="content">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
import AssignedContactMenu from './assignedContactMenu.vue'

export default {
  name: 'expand-tab',
  props: ['title', 'contactId', 'contactMsgTypes'],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    toggleCardState () {
      this.expanded = !this.expanded
    }
  },
  components: {
    AssignedContactMenu
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 10px;
  width: 100%;
  
  .card-header {
    cursor: pointer;
  
    .icon {
      transform: rotate(180deg);
      transition: transform 150ms ease-out;
    }
    p {
      font-size: 16px;
    }
  }
      
  .card-content {
    transition: all 150ms ease;
  }
}
      
.card.not-expanded {
  .card-header {
    .icon {
      transform: rotate(0deg);
    }
  }
  .card-content {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    height: 0;
    padding: 0;
  }
}
</style>
