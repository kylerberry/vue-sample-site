<template>
<transition name="dialog" class="dialog">
  <div class="dialog__mask" @click="close">
    <div class="dialog__wrapper">
      <div class="dialog__container">
        <a href="" @click="close" class="ss-delete dialog__close"></a>
        <div class="header">
           <slot name="header"></slot>
        </div>

        <div class="body">
          <slot name="body"></slot>
        </div>

        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Dialog',
  data: function () {
    return {
      showDialog: false
    }
  },
  methods: {
    close: function (e) {
      e.preventDefault()
      if (
        e.target.classList.contains('dialog__wrapper') ||
        e.target.classList.contains('dialog__close')
      ) {
        this.$emit('close', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.dialog {

  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-black, .6);
    display: table;
    transition: opacity .3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: top;
  }

  &__container {
    position: relative;
    width: 50%;
    margin: 0px auto;
    background-color: $color-white;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba($color-black, .33);
    transition: all .3s ease;
  }

  &__close {
    position: absolute;
    top: $pad;
    right: $pad;
    color: $color-white;
    text-decoration: none;
  }
}

.dialog-enter {
  opacity: 0;
}

.dialog-leave-active {
  opacity: 0;
}

.dialog-enter .dialog__container,
.dialog-leave-active .dialog__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.header,
.body,
.footer {
  padding: $pad * 1.5;
}

.header {
  background: $color-blue-darker;
  color: $color-white;
}

.footer {
  background: $color-gray-lighter;
  font-size: .8rem;
  line-height: 1.2rem;
  padding-bottom: $pad/2;
  padding-top: $pad/2;
}
</style>
