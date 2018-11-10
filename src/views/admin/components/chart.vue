
<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Foo', 'Bar', 'Baz'],
      datasets: [
        {
          data: [10, 20, 40],
          backgroundColor: ['#b388ff', '#82b1ff', '#80d8ff'],
          hoverBackgroundColor: ['#673ab7', '#2196f3', '#03a9f4']
        }
      ],
      option: {}
    })
  }
}
</script>

