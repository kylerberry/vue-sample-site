<template>
  <div class="filter">
    <div class="filter__results">
      <div class="filter__results__info">{{total}} dealers in {{data.zipcode}}</div>
      <div class="filter__results__trigger trigger">
        <div class="trigger__title">Filter Results</div>
        <div class="trigger__action" @click="showFilters = !showFilters">
          <i class="ss-dropdown"></i>
        </div>
      </div>
    </div>
    <div class="filter__filters filters-list" :class="{'filters-list--open' : showFilters}">
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
      selectedFilters: [],
      showFilters: false
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
@import "../sass/media-queries";

.filter {
  background: $color-gray-lighter;
  width: auto;
  margin: 0 -$pad;
  padding: $pad;

  @include for-tablet-landscape-up() {
    margin: inherit;
    text-align: center;
  }

  &__results {
    overflow: hidden;

    @include for-tablet-landscape-up() {
      display: inline-block;
      vertical-align: middle;
    }

    &__info {
      color: $color-blue;
      @include font('bold');
      float: left;
      padding: $pad 0;

      @include for-tablet-landscape-up() {
        float: none;
        display: inline-block;
        padding: $pad $pad $pad 0;
        border-right: 1px solid $color-gray;
      }
    }
  }
}

.trigger {
  float: right;

  @include for-tablet-landscape-up() {
    float: none;
    display: inline-block;
    margin: 0 $pad;
    line-height: .9;
  }

  &__title {
    @include font('bold');
    background: $color-white;
    padding: $pad;
    float: left;
    border: 1px solid $color-gray;
    border-right: 0;

    @include for-tablet-landscape-up() {
      padding: inherit;
      background: none;
      border: 0;
    }
  }

  &__action {
    background: $color-gray-lighter;
    padding: $pad;
    float: left;
    border: 1px solid $color-gray;
    cursor: pointer;

    @include for-tablet-landscape-up() {
      display: none;
    }
  }
}

.filters-list {
  background: $color-white;
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s;
  border-top: 0;
  border-bottom: 0;

  &--open {
    margin-top: -1px;
    max-height: 500px; // some arbitrary tall height
    border: 1px solid $color-gray;
  }

  &__item {
    display: block;
    margin: $pad;

    @include for-tablet-landscape-up() {
      display: inline-block;
      margin: 0 $pad;
      vertical-align: middle;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }

  @include for-tablet-landscape-up() {
    display: inline-block;
    background: none;
    max-height: inherit;
    overflow: inherit;
    transition: none;
    border: 0;
  }
}

</style>
