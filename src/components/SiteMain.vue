<template>
<div class="site-main">
    <div class="container">
      <DealerFilters :filters="filters" @filter-select="onSelectedFilter"/>
      <ul class="dealer-list">
          <li class="dealer-list__item"
            v-for="dealer in dealers"
            :key="dealer.data.companyID">
            <DealerCard :dealer="dealer" @email-dialog="openDialog"/>
          </li>
      </ul>
      <EmailDialog v-if="showDialog"
        :recipient="recipient"
        @close="showDialog = false"/>
    </div>
</div>
</template>

<script>
import DealerFilters from './DealerFilters'
import { getDealers } from '../services/dealer'
import DealerCard from './DealerCard'
import Dialog from './Dialog'
import EmailDialog from './EmailDialog'

export default {
  name: 'SiteMain',
  components: {
    DealerFilters,
    DealerCard,
    Dialog,
    EmailDialog
  },
  data: function () {
    return {
      filters: [
        { value: 'service', label: 'Service' },
        { value: 'installation', label: 'Installation' },
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' }
      ],
      selectedFilters: [],
      dealerData: {},
      recipient: null,
      showDialog: false
    }
  },
  computed: {
    dealers: function () {
      if (!this.dealerData || !this.dealerData.dealers) {
        return []
      }
      return this.getFilteredDealers(this.dealerData.dealers, this.selectedFilters)
    }
  },
  methods: {
    getDealersAsync: async function () {
      this.dealerData = await getDealers()
    },
    onSelectedFilter: function (filters) {
      this.selectedFilters = filters
    },
    getFilteredDealers: function (dealers, filters) {
      return dealers.filter(dealer => {
        let certs = dealer.data.certifications.join().toLowerCase()
        let found = filters.reduce((acc, filter) => acc + Number(certs.indexOf(filter) !== -1), 0)
        return found == filters.length
      })
    },
    openDialog: function (dealer) {
      this.recipient = dealer
      this.showDialog = true
    }
  },
  created: function () {
    this.getDealersAsync()
  }
}
</script>

<style lang="scss">
@import "../sass/variables";

.dealer-list {
  display: flex;
  flex-direction: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;

  &__item {
    width: 33.33%;
  }
}
</style>
