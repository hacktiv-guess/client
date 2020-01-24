<template>
  <div>
    <b-card no-body class='mb-3'>
      <b-row no-gutters class='bg-secondary'>
        <b-col md="5" class='offset-md-1 d-flex justify-content-center align-items-center'>
          <b-card-body :title='roomDetail.name' class='p-2 text-center d-flex justify-content-center align-items-center' style='min-height: 120px; color:white'>
            <b-card-text>
              <div v-for='(player, index) in roomDetail.players' :key="index"> <h1>{{player}}</h1></div>
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="3" class='offset-md-2 d-flex flex-column justify-content-center'>
          <button class="btn btn-success">Join</button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {

  name: 'RoomCard',
  props: ['roomDetail'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.card {
  opacity: 0.7;
}
</style>