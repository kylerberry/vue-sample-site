<template>
    <ul>
        <li v-for="dealer in dealers"
            :key="dealer.data.companyID">
            {{dealer.data.name}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'DealerList',
    props: ['dealers']
}
</script>

<style lang="sass">

</style>
