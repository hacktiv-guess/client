<template>
  <div>
    <b-card no-body class='mb-4 border-primary'>
      <b-row no-gutters class='bg-secondary'>
        <b-col md="5" class='offset-md-1'>
          <b-card-body title='Create Room' style='min-height: 120px; color:white'>
            <input type="text" maxlength="10" class="w-100" v-model='roomName'>
          </b-card-body>
        </b-col>
        <b-col md="3" class='offset-md-2 d-flex flex-column justify-content-center'>
          <button class="btn btn-primary" @click='createRoom'>Create</button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {

  name: 'CreateRoom',
  data () {
    return {
      roomName: ''
    }
  },
  methods: {
    createRoom(){
      this.$store.state.mySocket.emit('makeRoom', {roomName: this.roomName, username: this.$store.state.username})
      this.$store.state.mySocket.on('roomJoined', (room) => {
        this.$store.state.room = room
        // console.log(this.$store.state.room)
        this.$router.push({name: 'waitingRoom'})
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>