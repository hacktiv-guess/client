<template>
  <div>
    <h1>{{soal[indexSetSoal]}}</h1>
    <h2>{{test}}</h2>
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
      soal: [
        [1, 1, 3, 2, 4, 3, 2, 3],
        [3, 3, 1, 4, 3, 1, 1, 4],
        [2, 1, 4, 1, 4, 2, 3, 4],
        [1, 2, 3, 4, 2, 2, 4, 3],
        [3, 4, 1, 1, 3, 3, 3, 4],
        [1, 2, 3, 2, 1, 1, 2, 4],
        [2, 1, 3, 1, 4, 1, 2, 1],
        [2, 1, 3, 2, 4, 1, 2, 3],
        [2, 3, 4, 2, 2, 4, 4, 2],
        [1, 1, 3, 2, 1, 4, 3, 1],
        [4, 4, 4, 3, 3, 4, 2, 3],
        [1, 2, 2, 4, 3, 3, 4, 1],
        [4, 4, 1, 1, 4, 4, 3, 4],
        [2, 1, 2, 3, 2, 2, 4, 2],
        [3, 2, 4, 1, 2, 1, 1, 1],
        [1, 1, 2, 1, 3, 1, 2, 1],
        [1, 4, 4, 4, 1, 3, 1, 2],
        [3, 3, 4, 2, 1, 4, 1, 1],
        [4, 1, 1, 3, 2, 1, 2, 1],
        [4, 3, 1, 2, 1, 4, 2, 3],
        [1, 4, 3, 3, 2, 2, 2, 4],
        [2, 3, 3, 4, 4, 4, 1, 4],
        [1, 2, 2, 3, 1, 1, 4, 1],
        [4, 3, 3, 1, 3, 2, 4, 2],
        [3, 3, 1, 1, 1, 2, 4, 3]
      ],
      indexSetSoal: 0,
      indexChar: 0,
      test: ""
    };
  },

  components: {
    Keypress: () => import("vue-keypress")
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
        this.test = ''
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
        this.test = ''
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
        this.test = ''
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
        this.test = ''
      } else {
        this.indexChar++;
        this.test = this.test + "benar";
      }
    },
    pencetSpace() {
        if(this.indexChar == '8'){
            this.test= ''
            this.indexSetSoal++
            this.indexChar = 0
        }
        else{
            this.test = ''
            this.indexChar = 0
        }

        if(this.indexSetSoal == '25'){
            
        }
      
    }
  }
};
</script>

<style scoped>
</style>