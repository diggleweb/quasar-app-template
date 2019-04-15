<template>
  <q-layout view="lHh Lpr lFf">

    <Topbar />

    <Drawer />

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Drawer from '../components/Drawer'
import Topbar from '../components/Topbar'

export default {
  name: 'Layout',
  components: { Topbar, Drawer },
  data () {
    return {

    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
