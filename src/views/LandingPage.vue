<template>
  <div class="landing d-flex align-items-center justify-content-center">
    <audio autoplay> <source src="../assets/DancePeChance.mp3" type="audio/mpeg"> </audio>
    <img src="../assets/10.jpeg" alt="">
    <div class="card form-user d-flex flex-column p-4 pb-5" style="width: 30rem;">
    <form @submit.prevent="addMember" class="container">
    <div class="text-center mb-4 title"><h1>Io Den</h1></div>
      <div class="form-group">
        <input type="text" v-model="username" placeholder="username" class="form-control w-100" id="input">
      </div>
      <button type="submit" class="btn btn-primary w-100">Let's Play</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ""
    }
  },
  methods: {
    addMember () {
      this.$store.dispatch('mySocket')
      this.$store.commit('SET_USERNAME', this.username)
      this.$store.mySocket
      this.username = ''
      this.$router.push('/rooms')
    }
  },
}
</script>

<style scoped>
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