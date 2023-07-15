<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item></cart-item>
    <cart-item></cart-item>
    <cart-item></cart-item>

    <!-- Foote 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'

export default {
  name: 'App',
  components: {
    CartHeader,
    CartFooter,
    CartItem
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>
