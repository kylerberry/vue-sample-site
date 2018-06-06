<template>
<div class="dealer" itemscope itemtype="http://schema.org/LocalBusiness">
  <div class="header">
    <h3 class="header__name" itemprop="name">{{name}}</h3>
  </div>
  <div class="body">
    <div class="contact">
      <div class="contact__phone">
        <i class="ss-phone"></i>
        <span itemprop="telephone">
          <a :href="phoneHref">{{phone1}}</a>
        </span>
      </div>
      <div class="contact__email">
        <p>Can't talk now? Click below to send an email.</p>
        <button @click="triggerEmailDialog()">
          <i class="ss-mail"></i><span>Contact this Pro</span>
        </button>
      </div>
      <div class="contact__hours">
        <p>Business Hours</p>
        <div itemprop="openingHours">
          <span>Weekdays</span>&nbsp;<span>{{getHours(weekHours.mon)}}</span>
        </div>
        <div itemprop="openingHours">
          <span>Saturday</span>&nbsp;<span>{{getHours(weekHours.sat)}}</span>
        </div>
        <div itemprop="openingHours">
          <span>Sunday</span>&nbsp;<span>{{getHours(weekHours.sun)}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <ul class="certification-list" >
      <li class="certification-list__item"
        v-for="cert in certifications"
        :key="cert"
        itemprop="itemOffered"
        itemscope
        itemtype="http://schema.org/Service">
        <i :class="certIcons[cert]"></i><span itemprop="name">{{cert}}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'DealerCard',
  props: ['dealer'],
  data: function () {
    let data = {
      ...this.dealer.data
    }
    data.phoneHref = `tel:+${data.phone1.replace(/-/g, '')}`
    data.certIcons = {
      "Installation Pro" : "ss-star",
      "Commercial Pro" : "ss-users",
      "Residential Pro" : "ss-home",
      "Service Pro" : "ss-settings"
    }
    return data
  },
  methods: {
    triggerEmailDialog: function () {
      this.$emit('email-dialog', this.dealer.data)
    },
    getHours: function (hours) {
      if (hours == '') {
        return '- CLOSED'
      } else if (hours.match(/^[0-9]{1,2}:[0-9]{2}[a|p][m]\s-\s[0-9]{1,2}:[0-9]{2}[a|p][m]$/)) {
        return hours
      } else {
        return `- ${hours}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.dealer {
  border: 1px solid $color-gray;
  box-shadow: 0 1px 3px $color-gray-darker;
}

.header {
  padding: $pad 0;
  margin: 0 $pad;
  border-bottom: 1px solid $color-gray;
}

.footer {
  background: $color-gray;
}
</style>
