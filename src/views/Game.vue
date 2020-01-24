<template>
  <div>
    <!-- <h1>{{input}}</h1> -->
    <!-- <h2>{{indexSetButtonList}}</h2> -->
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
      setButton: [],
      indexSetButtonList: 0,
      indexChar: 0
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
      // Do something
      //   alert('kiri')
      //   this.input = this.input + "1";
      //   if (this.data[this.indexSetButtonList] != "1") {
      //     this.indexChar = 0;
      //   }
      //   else{
      //   }
    },
    pencetAtas() {
      // Do something
      //   alert("atas");
      this.input = this.input + "2";
      this.indexSetButtonList++;
    },
    pencetKanan() {
      // Do something
      //   alert("kanan");
      this.input = this.input + "3";
      this.indexSetButtonList++;
    },
    pencetBawah() {
      // Do something
      //   alert("bawah");
      this.input = this.input + "4";
      this.indexSetButtonList++;
    },
    pencetSpace() {
      // Do something
      //   alert("space");
      this.input = "";
      this.indexSetButtonList = 0;
    }
  }
};
</script>

<style scoped>
</style>