<template>
  <div>
    <div class="d-flex ">
        <div class="col-md-1" v-for="item in soalSekarang">
            <img :src="item" :key="item" class="image-fluid">
        </div>
    </div>
    <Keypress :key-code="37" event="keyup" @pressed="pencetKiri" />
    <Keypress :key-code="38" event="keyup" @pressed="pencetAtas" />
    <Keypress :key-code="39" event="keyup" @pressed="pencetKanan" />
    <Keypress :key-code="40" event="keyup" @pressed="pencetBawah" />
    <Keypress :key-code="32" event="keyup" @pressed="pencetSpace" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      soal: '',
      indexSetSoal: 0,
      indexChar: 0,
      test: ""
    };
  },

  components: {
    Keypress: () => import("vue-keypress")
  },
  computed: {
    soalSekarang() {
      const gambarSoal = [];
      this.soal[this.indexSetSoal].forEach(gambar => {
        gambarSoal.push(`https://prograami.com/gambardance/${gambar}.png`);
      });
      return gambarSoal;
    }
  },
  methods: {
    trackKeyboard: function(e) {
      alert();
    },
    pencetKiri() {
      if (
        this.soal[this.indexSetSoal][this.indexChar] != "1" ||
        this.indexChar == "8"
      ) {
        this.indexChar = 0;
        this.test = "";
      } else {
        this.indexChar++;
        this.test = this.test + "benar";
      }
    },
    pencetAtas() {
      if (
        this.soal[this.indexSetSoal][this.indexChar] != "2" ||
        this.indexChar == "8"
      ) {
        this.indexChar = 0;
        this.test = "";
      } else {
        this.indexChar++;
        this.test = this.test + "benar";
      }
    },
    pencetKanan() {
      if (
        this.soal[this.indexSetSoal][this.indexChar] != "3" ||
        this.indexChar == "8"
      ) {
        this.indexChar = 0;
        this.test = "";
      } else {
        this.indexChar++;
        this.test = this.test + "benar";
      }
    },
    pencetBawah() {
      if (
        this.soal[this.indexSetSoal][this.indexChar] != "4" ||
        this.indexChar == "8"
      ) {
        this.indexChar = 0;
        this.test = "";
      } else {
        this.indexChar++;
        this.test = this.test + "benar";
      }
    },
    pencetSpace() {
      if (this.indexChar == "8") {
        this.test = "";
        this.indexSetSoal++;
        this.indexChar = 0;
      } else {
        this.test = "";
        this.indexChar = 0;
      }

      if (this.indexSetSoal == "25") {
      }
    }
  },
  created() {
    const roomData = this.$store.state.room;

    // this.soal = roomData.allSet;
  }
};
</script>

<style scoped>
</style>