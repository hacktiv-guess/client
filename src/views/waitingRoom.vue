<template>
  <div class="waiting">
   <div class="d-flex flex-row bd-highlight p-2 pl-5 container" style="padding-top:10rem !important">
      <div class="bd-highlight w-50 p-2 pr-4 pl-2 d-flex flex-row align-items-center player">
            <p class="pr-4"><img src="https://img.icons8.com/color/48/000000/avatar.png" style="width: 3rem"></p>
            <h1 class="pr-3">{{room.players[0]}}</h1> - <h1 class="pl-3">{{room.roomName}}</h1>
         </div>
         <div class="bd-highlight w-50 p-2 pl-2 pr-4 d-flex flex-row align-items-center player">
            <p class="pr-3"><img src="https://img.icons8.com/plasticine/100/000000/user-female.png" style="width: 4rem"></p>
            <h1 class="pr-3">{{room.players[1]}}</h1> - <h1 class="pl-3">{{room.roomName}}</h1>
         </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-5">
         <button class="btn btn-primary w-25">Let's Play</button>
      </div>
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
      
   },

   created() {
      this.$store.dispatch('mySocket')
      this.$store.state.mySocket.on('gameStart', () => {
         this.$router.push({name: 'play'})
      })
   }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap');

h1 {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: rgb(128, 95, 14);
}
.waiting {
   width: 100vw;
   height: 100vh;
   background-color: black
}

.btn {
   height: 4rem;
  background-color: rgb(128, 95, 14);
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 2rem;
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

.player {
   border-left: 0.3rem solid rgb(128, 95, 14)
}

</style>