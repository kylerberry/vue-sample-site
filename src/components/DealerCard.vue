<template>
<div class="dealer" itemscope itemtype="http://schema.org/LocalBusiness">
  <div class="header">
    <h3 class="header__name" itemprop="name">{{name}}</h3>
  </div>
  <div class="body">
    <div class="contact">
      <div class="contact__phone">
        <i class="ss-phone contact__phone__icon"></i>
        <span itemprop="telephone">
          <a class="contact__phone__link" :href="phoneHref">{{phone1}}</a>
        </span>
      </div>
      <div class="contact__email">
        <p class="contact__email__description">Can't talk now? Click below to send an email.</p>
        <button class="contact__email__button" @click="triggerEmailDialog()">
          <i class="ss-mail contact__email__button__icon"></i><span>Contact this Pro</span>
        </button>
      </div>
      <div class="contact__hours">
        <p class="contact__hours__description">Business Hours</p>
        <div itemprop="openingHours">
          <span class="contact__hours__item" >Weekdays</span>&nbsp;<span>{{getHours(weekHours.mon)}}</span>
        </div>
        <div itemprop="openingHours">
          <span class="contact__hours__item" >Saturday</span>&nbsp;<span>{{getHours(weekHours.sat)}}</span>
        </div>
        <div itemprop="openingHours">
          <span class="contact__hours__item" >Sunday</span>&nbsp;<span>{{getHours(weekHours.sun)}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <ul class="certification-list" >
      <li class="certification-list__item cert"
        v-for="cert in certifications"
        :key="cert"
        itemprop="itemOffered"
        itemscope
        itemtype="http://schema.org/Service">
        <i :class="certIcons[cert]" class="cert__icon"></i><span itemprop="name">{{cert}}</span>
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
@import "../sass/base";

.dealer {
  border: 1px solid $color-gray-lighter;
  box-shadow: 0 1px 3px $color-gray-darker;
  border-radius: $border-radius;
  margin-bottom: $pad;
}

.header {
  padding: $pad 0;
  margin: 0 $pad;
  border-bottom: 1px solid $color-gray-lighter;

  &__name {
    text-align: center;
    @include font('light');
  }
}

.contact {
  text-align: center;
  padding: $pad*2 $pad;

  &__phone {
    margin-bottom: $pad;

    &__icon {
      border-radius: 50%;
      background: $color-blue;
      color: $color-white;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: top;
      font-size: .9rem;
      padding: .33rem;
      margin-right: .5rem;
    }
    
    &__link {
      color: $color-black;
      font-size: 1.35rem;
      @include font('xbold');

      &:hover {
        text-decoration: none!important;
      }
    }
  }

  &__email {

    &__description {
      @include font('italic');
      font-size: .75rem;
      margin-bottom: $pad*1.5;
    }

    &__button {
      cursor: pointer;
      display: inline-block;
      border: 2px solid $color-teal;
      border-radius: $border-radius/2;
      padding: $pad/2 $pad;
      background-color: transparent;
      transition: background-color .2s, border-color .2s;
      min-width: 3.75rem;
      margin-right: .25rem;
      color: $color-blue-darker;
      vertical-align: middle;
      @include font('bold');
      margin-bottom: $pad*1.5;
      font-size: .9rem;

      &:hover {
        background: $color-teal;
        border-color: $color-teal-darker;
      }

      &__icon {
        vertical-align: middle;
        margin-right: .75rem;
      }
    }
  }

  &__hours {

    &__description {
      @include font('bold');
      font-size: .8rem;
    }

    &__item {
      line-height: 1.2rem;
      font-size: .9rem;
    }
  }
}

.certification-list {
  list-style: none;
  text-align: center;
  margin: 0;
  overflow: hidden;
  padding: 0 $pad;

  &__item {
    color: $color-gray;
    margin: 0 0 $pad;
    font-size: .75rem;
    @include font('bold');
    float: left;
    width: 50%;
    text-align: left;
  }
}

.cert {
  &__icon {
    margin-right: .3rem;
  }
}

.footer {
  background: $color-gray-lighter;
  padding: 1.5rem 2rem .75rem;
  min-height: 6rem;
}
</style>
