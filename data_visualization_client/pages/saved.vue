<template>
  <section class="container">
    <div class="chart-operations">
      <button
        class="button is-primary"
        :class="{ 'is-loading': refreshing }"
        @click="loadRecords"
      >
        Refresh
      </button>
    </div>
    <highcharts :options="chartOptions"></highcharts>
  </section>
</template>

<script>
import { formatDate } from '~/components/js/util'

export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: 'Saved Records'
        },
        series: []
      },
      refreshing: false
    }
  },
  created() {
    this.loadRecords()
  },
  methods: {
    async loadRecords() {
      this.refreshing = true
      this.records = await this.$axios.$get('/api/record/saved')
      this.chartOptions.series = this.records.map(val => ({
        data: val.data_array,
        name: formatDate(val.timestamp)
      }))
      this.refreshing = false
    }
  }
}
</script>

<style></style>
