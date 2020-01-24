<template>
  <div class="col-md-6 offset-md-3" style="overflow:scroll; max-height: 80vh">
    <CreateRoom />
    <RoomCard v-for='room in roomList' :key='room.id' :roomDetail='room'/>
  </div>
</template>

<script>
import RoomCard from '@/components/RoomCard.vue'
import CreateRoom from '@/components/CreateRoom.vue'
export default {

  name: 'GameLobby',
  components: {
    RoomCard,
    CreateRoom
  },
  data () {
    return {
      roomList: []
    }
  },
  computed: {
  },
  created(){
    this.$store.state.mySocket.on('sendRooms', (rooms) => {
      this.roomList = rooms
    })
    this.$store.state.mySocket.emit('fetchRoom')
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');

.landing {
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}

.title {
  font-family: 'VT323', monospace;
}

.form-user {
  position: absolute;
  bottom: 40%;
  left: 34%;
}

#input {
  height: 3rem;
  box-shadow: none;
  border-color: goldenrod;
  border-left: 0.5rem solid goldenrod;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: rgb(128, 95, 14);
  font-size: 1.5rem
}
#input:hover, #input:focus {
  border-color: rgb(128, 95, 14);
  border-left: 0.5rem solid rgb(128, 95, 14)
}

.btn {
  background-color: rgb(128, 95, 14);
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  border-color: rgb(128, 95, 14);
  box-shadow: none
}

.btn:hover, .btn:focus {
  background-color: goldenrod;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  border-color: goldenrod;
  box-shadow: none
}

.card {
  opacity: 0.7;
}

img {
  object-fit: cover;
  height: 100%;
  opacity: 0.5
}

</style>