<template>
  <div class="filter">
    <div class="filter__results">
      <p class="filter__results__info">{{total}} dealers in {{data.zipcode}}</p>
      <p class="filter__results__title">Filter Results</p>
    </div>
    <div class="filter__filters filters-list">
      <InputCheckbox v-for="filter in filters"
        v-model="selectedFilters"
        :val="filter.value"
        :label="filter.label"
        :key="filter.value"
        class="filters-list__item"/>
    </div>
  </div>
</template>

<script>
import InputCheckbox from './InputCheckbox'

export default {
  name: 'DealerFilters',
  components: { InputCheckbox },
  props: ['filters', 'data'],
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
  },
  computed:{
    total: function () {
      return this.data && this.data.dealers ? this.data.dealers.length : 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.filter {
  background: $color-gray-lighter;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: $pad*2 $pad;
  border-radius: $border-radius;

  &__results {
    display: inline-block;

    &__title,
    &__info {
      display: inline-block;
      margin: 0 $pad*2 0 0;
    }

    &__info {
      color: $color-blue;
      @include font('bold');
    }

    &__title {
      @include font('bold');
      border-left: 1px solid $color-gray;
      padding-left: $pad*2;
    }
  }
}

.filters-list {

  &__item {
    display: inline-block;
  }
}

</style>
