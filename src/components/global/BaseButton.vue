<template>
  <button :class="['base-button']" :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.base-button {
  width: 100px;
  height: 40px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background: #000;
  color: #fff;
  line-height: 42px;
  padding: 0;
  border: none;
}
.base-button:hover {
  background: transparent;
  color: #000;
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
}
.base-button:before,
.base-button:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #000;
  transition: 400ms ease all;
}
.base-button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.base-button:hover:before,
.base-button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
