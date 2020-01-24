<template>
  <div class="waiting border">
<h1><img src="https://img.icons8.com/color/48/000000/avatar.png"></h1>
   <p>{{room.players[0]}}</p>
   <p>{{room.players[1] || 'kalo ga ada'}}</p>
   <p>Room name: {{room.roomName}}</p>
  </div>
</template>

<script>
export default {
   name: 'WaitingRoom',
   computed: {
      room() {
         return this.$store.state.room
      }
   },

   methods: {
      
   }
}
</script>

<style scoped>
.waiting {
   width: 100vw;
   height: 100vh;
}
</style>