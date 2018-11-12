
<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      default: function() {
        return []
      }
    }, dataset: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          data: this.dataset,
          backgroundColor: ['#b388ff', '#82b1ff', '#80d8ff'],
          hoverBackgroundColor: ['#673ab7', '#2196f3', '#03a9f4']
        }
      ],
      option: {}
    })
  }
}
</script>

