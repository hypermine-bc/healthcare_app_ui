<template>
  <drug-detail :is-edit="true"/>
</template>

<script>
import DrugDetail from '../components/MedicineDetails'
// ss
export default {
  name: 'CreateForm',
  components: { DrugDetail }
}
</script>

