<template>
  <div class="qty-box">
    <span class="dec" @click="onDecrement()" v-on:touch-start="onDecrement()">–</span>
    <span class="qty" :value="currentValue">{{currentValue}}</span>
    <span class="inc" @click="onIncrement()" v-on:touch-start="onIncrement()">+</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: this.$props.value,
    };
  },
  props: {
    value: {
      type: Number,
      default: 1,
    },
    allowNegative: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  computed: {

  },
  methods: {
    onDecrement() {
      if (this.currentValue <= 0 && !this.$props.allowNegative) return;
      this.currentValue -= this.$props.step;
      this.$emit('input', this.currentValue);
    },
    onIncrement() {
      this.currentValue += this.$props.step;
      this.$emit('input', this.currentValue);
    },
  },
};
</script>

<style scoped lang="scss">

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.qty-box {
  border: 1px solid #94c4ec;
  border-radius: 3px;
  display: block;
  height: 60px;
  // margin: calc(50vh - 30px) auto 0 auto; // this is simply a monstruous line. It makes everything worse.
  width: 200px;
}

span {
  color: #62a8e2;
  font-family: sans-serif;
  float: left;
  line-height: 60px;
  text-align: center;
  width: calc((200px/3) - 1px); // subract 1px for border
  -webkit-font-smoothing: antialiased;
}

.dec, .inc {
  height: 100%;
  
  &:hover {
    cursor: pointer;
  }
}
</style>

