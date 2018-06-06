<template>
  <div class="input-checkbox">
    <label class="input-checkbox__label" :for="_uid">
      {{label}}
    </label>
    <input class="input-checkbox__input"
      type="checkbox"
      :id="_uid"
      :value="val"
      v-model="checked"
      @change="onChange"/>
</div>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: ['label', 'val', 'value'],
  data: function () {
    return {
      checkedProxy: false
    }
  },
  computed: {
	  checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods: {
    onChange: function () {
      this.$emit('input', this.checkedProxy)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
