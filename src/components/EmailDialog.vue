<template>
<Dialog @close="$emit('close')">
  <div slot="header">
    <p class="subheader">Email</p>
    <h2 class="title">{{recipient.name}}</h2>
  </div>

  <div slot="body">
    <p>Fill out the form below and {{recipient.name}} will get in touch.</p>
    <EmailForm :recipient="recipient" @success="$emit('close')"/>
  </div>

  <div slot="footer">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae libero nibh. Aliquam consectetur lacus a egestas lacinia. Quisque et pretium leo, vitae fermentum erat. Mauris magna felis, rhoncus egestas felis ut, eleifend tincidunt ex. Fusce vel est arcu. Donec fermentum erat sed turpis vehicula tincidunt.</p>
  </div>
</Dialog>
</template>

<script>
import Dialog from './Dialog'
import EmailForm from './EmailForm'

export default {
  name: 'EmailDialog',
  components: { Dialog, EmailForm },
  props: ['recipient'],
}
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/base";

.subheader {
  margin-top: 0;
  text-transform: uppercase;
  @include font('bold');
  font-size: .8rem;
}

.title {
  margin: .25rem 0 0;
}
</style>
