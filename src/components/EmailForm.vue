<template>
  <div class="email-form">
    <form @submit="submit">
      <div v-for="field in fields" :key="field.name"
        :class="{[`email-form__${field.type}`] : field.type}">
        <InputField
          :type="field.type"
          :name="field.name"
          :label="field.label"
          :required="field.required"
          @input="field.value = $event"
          v-if="field.type !== 'switch'" />
        <inputSwitch
          v-if="field.type === 'switch'"
          :name="field.name"
          :label="field.label"
          onLabel="Yes"
          offLabel="No" />
      </div>
      <div>
        <hr />
        <button class="email-form__submit"
          type="submit">
          Send my email<i class="email-form__submit__icon ss-navigateright" ></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from './InputField'
import InputSwitch from './InputSwitch'

export default {
  name: 'EmailForm',
  props: ['recipient'],
  components: { InputField, InputSwitch },
  data: function () {
    return {
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'First and last name',
          required: true,
          value: null
        },
        {
          type: 'phone',
          name: 'phone',
          label: 'Phone number',
          required: true,
          value: null
        },
        {
          type: 'email',
          name: 'email',
          label: 'Email Address',
          required: true,
          value: null
        },
        {
          type: 'textarea',
          name: 'comments',
          label: 'Comments or questions',
          required: false,
          value: null
        },
        {
          type: 'switch',
          name: 'own_pool',
          label: 'Do you currently own a pool or spa?',
          value: true
        }
      ]
    }
  },
  methods: {
    submit: function (e) {
      console.log(this.fields.map(field => field.value))
      e.preventDefault()
      this.$emit('success')
    },
    onToggle: function (e, field, value) {
      e.preventDefault()
      field.value = value
    }
  }
}
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/mixins";

.email-form {
  background: $color-gray-lighter;
  padding: $pad;
  display: flex;
  flex-direction: column;

  &__submit {
    margin: 1rem auto 0;
    display: block;
    background: none;
    border: 0;
    @include font('bold');
    padding: 1rem;
    cursor: pointer;

    &__icon {
      color: $color-teal-darker;
      vertical-align: middle;
      margin: 0 .5rem;
    }
  }

  &__phone {
    width: 50%;
  }
}

hr {
  border: 0px;
  border-bottom: 1px solid $color-gray;
}

</style>
