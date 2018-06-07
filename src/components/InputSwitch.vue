<template>
<div class="input-switch">
  <legend class="input-switch__legend">{{label}}</legend>

  <div class="input-switch__toggle toggle">
    <label class="toggle__label"
      :class="{'toggle__label--active' : model}"
      :for="`${name}-on`">
      {{onLabel}}
    </label>
    <input class="toggle__input" type="radio" :value="true" :name="`${name}`" :id="`${name}-on`" v-model="model"/>

    <label class="toggle__label"
      :class="{'toggle__label--active' : !model}"
      :for="`${name}-off`">
      {{offLabel}}
    </label>
    <input class="toggle__input" type="radio" :value="false" :name="`${name}`" :id="`${name}-off`" v-model="model"/>

  </div>
</div>
</template>

<script>
export default {
  name: 'InputSwitch',
  props: ['value', 'label', 'name', 'onLabel', 'offLabel'],
  data: function () {
    return {
      model: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.input-switch {
  margin-bottom: $pad;
  position: relative;
  @include clearfix();

  &__toggle {
    clear: both;
  }

  &__legend {
    float: left;
    margin-bottom: $pad/2;
    @include font('bold');
    font-size: .9rem;
  }

  &__input {
    clear: both;
    float: left;
    width: 100%;
    padding: .75rem;
    border: 1px solid $color-gray;
    line-height: 1.5rem;
    outline-color: $color-teal-darker;
  }
}

.toggle {

  &__label {
    cursor: pointer;
    display: inline-block;
    border: 1px solid $color-black;
    border-radius: $border-radius;
    padding: $pad/3 $pad;
    transition: color .2s, background-color .2s;
    min-width: 3.75rem;
    margin-right: .25rem;

    &--active {
      background-color: $color-teal-darker;
      color: $color-white;
    }
  }

  &__input {
    visibility: hidden;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
}
</style>
