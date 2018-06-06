<template>
<div class="input-checkbox">
  <input class="input-checkbox__input"
    type="checkbox"
    :id="_uid"
    :value="val"
    v-model="checked"
    @change="onChange"/>
    <label class="input-checkbox__label"
      :for="_uid"
      :class="{'input-checkbox__label--selected' : checked}">
      {{label}}
    </label>
</div>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: ['label', 'val', 'value'],
  data: function () {
    return {
      checked: false
    }
  },
  methods: {
    onChange: function (e) {
      this.$emit('input', {
        key: e.target.value,
        value: this.checked
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.input-checkbox {

  &__input {
    position: absolute;
    visibility: hidden;
    top: -9999px;
    left: -9999px;
  }
  
  &__label {
    cursor: pointer;
    margin-right: $pad;

    &::before {
      content: '';
      display: inline-block;
      height: 1rem;
      width: 1rem;
      background: $color-white;
      box-shadow: inset 0 0 0 1px $color-gray;
      border-radius: $border-radius;
      margin-right: $pad/2;
      vertical-align: top;
    }

    &--selected {
      &::before {
        box-shadow: inset 0 0 0 .35rem $color-blue;
      }
    }
  }
}
</style>
