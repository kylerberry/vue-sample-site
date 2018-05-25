<template>
<div class="site-footer">
  <div class="footer-main">

  </div>
  <div class="footer-bottom">
    <div class="container">
      <ul class="footer-links">
        <li class="footer-links__item">&copy; {{year}} Pool Pros</li>
        <li class="footer-links__item"><a class="footer-links__link" href="" title="Privacy Policy">Privacy Policy</a></li>
        <li class="footer-links__item"><a class="footer-links__link" href="" title="Terms and Conditions">Terms and Conditions</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: function () {
    let date = new Date()
    return {
      year: date.getFullYear()
    }
  }
}
</script>

<style lang="scss">
@import "../sass/base";

.footer-bottom {
  background-color: $color-blue;
  overflow: hidden;
  font-size: 14px;

  * {
    font-size: 1em;
  }
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;

  &__item {
    padding: 0 $pad;
    border-right: 1px solid $color-white;
    color: $color-white;

    &:last-child {
      border-right: 0;
    }
  }

  &__link {
    color: $color-white;
  }
}
</style>
