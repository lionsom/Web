<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "lx-fail-button-ui",
};
</script>

<style src="./index.scss" scoped lang="scss"></style>

<style scoped lang="scss">
div {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 2px solid #999;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
</style>
