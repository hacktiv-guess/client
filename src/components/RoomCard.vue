<template>
  <div>
    <b-card no-body class='mt-4 border-primary''>
      <b-row no-gutters class='bg-secondary'>
        <b-col md="3" class='offset-md-1'>
          <b-card-body :title='roomDetail.name' class='p-2' style='min-height: 120px'>
            <b-card-text>
              <div v-for='player in roomDetail.players'>{{player}}</div>
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="3" class='offset-md-3 d-flex flex-column justify-content-center'>
          <button class="btn btn-success">JOIN</button>
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

<style lang="css" scoped>
</style>