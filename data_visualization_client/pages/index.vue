<template>
  <section class="container">
    <div class="chart-operations">
      <button
        class="button is-primary"
        :class="{ 'is-loading': saving }"
        @click="save"
      >
        Save
      </button>
    </div>
    <highcharts
      :options="chartOptions"
      :update-args="[true, true, true]"
    ></highcharts>
  </section>
</template>

<script>
import { formatDate } from '~/components/js/util'

const INTERVAL_IN_SECONDS = 10 // refresh every 10 seconds

export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: 'Latest Record'
        },
        series: []
      },

      interval: null,
      lastestRecord: null,
      saving: false
    }
  },
  created() {
    this.fetchArrayData() // show data immediately
    this.interval = setInterval(() => {
      this.fetchArrayData()
    }, INTERVAL_IN_SECONDS * 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },

  methods: {
    async fetchArrayData() {
      this.lastestRecord = await this.$axios.$get('/api/record/latest')
      this.chartOptions.series = [
        {
          data: this.lastestRecord.data_array,
          name: formatDate(this.lastestRecord.timestamp)
        }
      ]
    },

    async save() {
      if (this.lastestRecord.saved) return // avoid to be saved for multiple times
      this.saving = true
      await this.$axios.$post('/api/record/save', this.lastestRecord)
      this.lastestRecord.saved = true // mark as saved
      this.saving = false
    }
  }
}
</script>
