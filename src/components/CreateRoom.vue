<template>
  <div>
    <b-card no-body class='mb-4 border-primary''>
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
let socket = io.connect('http://localhost:3000')

export default {

  name: 'CreateRoom',
  data () {
    return {
      roomName: '',
      username: 'carl'
    }
  },
  methods: {
    createRoom(){
      console.log('create')
      socket.emit('makeRoom', {roomName: this.roomName, username: this.username})
    }
  }
}
</script>

<style lang="css" scoped>
</style>