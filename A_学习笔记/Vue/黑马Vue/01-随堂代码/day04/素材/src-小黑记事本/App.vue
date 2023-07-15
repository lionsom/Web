<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <header class="header">
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" class="new-todo" />
      <button class="add">添加任务</button>
    </header>

    <!-- 列表区域 -->
    <section class="main">
      <ul class="todo-list">
        <li class="todo">
          <div class="view">
            <span class="index">1.</span> <label>吃饭饭</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
    
    <!-- 统计和清空 -->
    <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> 1 </strong></span>
      <!-- 清空 -->
      <button class="clear-completed">
        清空任务
      </button>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
