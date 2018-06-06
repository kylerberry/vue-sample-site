<template>
  <div>
    <InputCheckbox v-for="filter in filters"
      v-model="selectedFilters"
      :val="filter.value"
      :label="filter.label"
      :key="filter.value" />
  </div>
</template>

<script>
import InputCheckbox from './InputCheckbox'

export default {
  name: 'DealerFilters',
  components: { InputCheckbox },
  props: ['filters'],
  watch: {
    selectedFilters: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('filter-select', newValue)
      }
    }
  },
  data: function () {
    return {
      selectedFilters: []
    }
  }
}
</script>

<style lang="scss">

</style>
