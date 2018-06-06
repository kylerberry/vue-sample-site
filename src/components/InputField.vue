<template>
<div class="input-field">
  <div class="input-field__required"
    v-if="required"
    :class="{
      'input-field__required--valid ss-check' : model && model.length,
      'input-field__required--invalid' : !model || !model.length
    }">
  </div>
  <div class="input-field__optional" v-if="!required">optional</div>
  <label class="input-field__label" :for="name">{{label}}</label>
  <input v-if="type !== 'textarea'" class="input-field__input"
    :type="type"
    :name="name"
    :id="name"
    :value="value"
    v-model="model"
    @input="$emit('input', $event.target.value)" />
  <textarea v-if="type == 'textarea'" class="input-field__input"
    :type="type"
    :name="name"
    :id="name"
    :value="value"
    rows="3"
    v-model="model"
    @input="$emit('input', $event.target.value)" >
  </textarea>
</div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['value', 'label', 'name', 'required', 'optional', 'type'],
  data: function () {
    return {
      model: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.input-field {
  margin-bottom: $pad;
  position: relative;
  @include clearfix();

  &__label {
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

  &__optional,
  &__required {
    float: right;
  }

  &__required {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    box-shadow: 0 0 0 2px $color-gray;
    font-size: .75rem;
    text-align: center;
    line-height: 1.35rem;
    @include font('light');
    
    &--valid {
      box-shadow: 0 0 0 2px $color-teal-darker;
      color: $color-teal-darker;
    }

    &--invalid {
      box-shadow: 0 0 0 2px $color-gray;
    }
  }

  &__optional {
    color: $color-gray;
    @include font('italic');
  }
}
</style>

