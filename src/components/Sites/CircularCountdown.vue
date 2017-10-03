<template>
  <div class="bar">
    <radial-progress-bar :diameter="200"
                          :completed-steps="daysPassed"
                          :total-steps="days"
                          :startColor="color"
                          :stopColor="color"
                          :strokeWidth="10">
      <p class="days" :style="{color: color}">{{ daysLeft }}</p>
      <p class="text">dní do konce</p>
    </radial-progress-bar>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress/dist/vue-radial-progress.min.js'

function fixBar () {
  let chart = document.getElementsByClassName('radial-progress-bar')
  let circle = chart[0].getElementsByTagName('circle')
  circle[0].setAttribute('stroke', '')
  circle[1].setAttribute('stroke-linecap', 'square')
}

export default {
  name: 'circular-countdown',
  props: ['dateFrom', 'dateTo'],
  mounted () {
    fixBar()
  },
  computed: {
    days () {
      var first = new Date(this.dateFrom)
      var second = new Date(this.dateTo)
      return Math.round((second - first) / (1000 * 60 * 60 * 24))
    },
    daysPassed () {
      let first = new Date(this.dateFrom)
      let second = new Date()
      return Math.round((second - first) / (1000 * 60 * 60 * 24))
    },
    daysLeft () {
      return this.days - this.daysPassed
    },
    color () {
      if (this.daysLeft <= 30) return '#ad4949' // Red
      if (this.daysLeft <= 90) return '#e6d841' // Yellow
      else return '#78b43c' // Green
    }
  },
  components: {
    RadialProgressBar
  }
}
</script>

<style scoped>
.bar {
  padding: 20px 0 0 0;
}
.bar .radial-progress-container {
  margin: 0 auto;
}
.bar .days {
  font-size: 30px;
  margin-bottom: 0;
}
.bar .text {
  font-size: 11px;
  color: #aeaeae;
}
</style>
