<template>
  <div class="col-md-6 offset-md-3" style="overflow:scroll; max-height: 80vh">
    <RoomCard v-for='room in roomList' :key='room.id' :roomDetail='room'/>
  </div>
</template>

<script>
import RoomCard from '@/components/RoomCard.vue'
export default {

  name: 'GameLobby',
  components: {
    RoomCard
  },
  data () {
    return {

    }
  },
  computed: {
    roomList(){
      return this.$store.state.roomList
    }
  }
}
</script>

<style lang="css" scoped>
</style>