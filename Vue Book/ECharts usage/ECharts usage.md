# GPT

ECharts 是一个开源的 JavaScript 图表库，可以创建各种类型的交互式图表。Vue-ECharts 是一个将 ECharts 集成到 Vue.js 应用中的库，它提供了一个 Vue 组件，用于在 Vue 应用中使用 ECharts。

## ECharts

ECharts 是一个功能强大的数据可视化库，支持各种类型的图表，如折线图、柱状图、饼图、散点图、地图等。它具有高性能和丰富的交互功能，适用于各种数据可视化需求。

## Vue-ECharts

Vue-ECharts 是一个专门为 Vue.js 封装的 ECharts 组件库。它简化了在 Vue 应用中使用 ECharts 的过程，使得在 Vue 组件中创建和管理图表变得更加容易。Vue-ECharts 提供了一个名为 `v-chart` 的 Vue 组件，允许你通过声明式的方式在 Vue 模板中使用 ECharts。

## 关系和使用方式

1. **ECharts 是核心库**：ECharts 是核心的数据可视化库，所有图表的绘制和功能实现都依赖于 ECharts。

2. **Vue-ECharts 是封装库**：Vue-ECharts 是对 ECharts 的封装，它提供了一个 Vue 组件，使得在 Vue.js 项目中使用 ECharts 更加方便。

## 示例

以下是如何在 Vue.js 应用中使用 Vue-ECharts 的示例：

1. 安装依赖：

```bash
npm install echarts vue-echarts
```

2. 注册 Vue-ECharts 组件：

```javascript
// main.js
import Vue from 'vue';
import ECharts from 'vue-echarts';

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// 全局注册组件
Vue.component('v-chart', ECharts);

new Vue({
  el: '#app',
  render: h => h(App),
});
```

3. 使用 `v-chart` 组件：

```html
<template>
  <div>
    <v-chart :options="chartOptions" style="width: 600px; height: 400px;"></v-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    };
  }
};
</script>
```

在这个示例中，我们首先安装了 ECharts 和 Vue-ECharts，然后在 `main.js` 中引入并注册了 Vue-ECharts 组件。在 Vue 组件中，我们使用 `v-chart` 组件并通过 `options` 属性传递 ECharts 的配置对象。

## 总结

- **ECharts**：强大的数据可视化库，用于创建各种图表。
- **Vue-ECharts**：将 ECharts 封装成 Vue 组件，使其更容易在 Vue.js 项目中使用。

通过 Vue-ECharts，可以在 Vue 应用中轻松集成和使用 ECharts 提供的强大图表功能。





# echarts 与 vue-echarts 关系

**关系**

- **Vue-echarts 是 echarts 的 Vue.js 封装**
- Vue-echarts 提供了在 Vue.js 应用程序中使用 echarts 的简便方法。

**区别**

**echarts**

- 独立的 JavaScript 库，用于创建交互式图表。
- 提供丰富的图表类型和自定义选项。
- 需要手动与 Vue.js 集成。

**Vue-echarts**

- 基于 echarts 的 Vue.js 组件。
- 提供了 Vue.js 友好的 API，简化了 echarts 的使用。
- 自动处理与 Vue.js 的集成，包括数据响应性和组件声明周期管理。

**使用场景**

**echarts**

- 当需要完全控制图表配置和自定义时。
- 当需要在 Vue.js 应用程序之外使用 echarts 时。

**Vue-echarts**

- 当需要在 Vue.js 应用程序中快速轻松地创建和使用 echarts 图表时。
- 当需要使用 Vue.js 的数据响应性和组件声明周期管理功能时。

**总结**

Vue-echarts 是在 Vue.js 应用程序中使用 echarts 的最佳选择，因为它提供了简便性和 Vue.js 特性的集成。但是，如果您需要完全控制图表配置或在 Vue.js 应用程序之外使用 echarts，则可以使用独立的 echarts 库。





**GridComponent** 组件用于定义图表中的网格区域，网格区域是放置坐标轴和系列的容器。

**用法**

在 ECharts 中使用 GridComponent，需要在 `options.grid` 中配置，例如：

```javascript
options = {
  grid: {
    // GridComponent 配置选项
  }
}
```

**选项**

GridComponent 接受以下选项：

- **show:** 是否显示网格，默认为 `true`。
- **left:** 网格距容器左侧的距离，默认为 `'auto'`。
- **top:** 网格距容器顶部的距离，默认为 `0`。
- **right:** 网格距容器右侧的距离，默认为 `'auto'`。
- **bottom:** 网格距容器底部的距离，默认为 `0`。
- **width:** 网格的宽度，默认为 `'auto'`。
- **height:** 网格的高度，默认为 `'auto'`。
- **containLabel:** 是否包含坐标轴标签，默认为 `false`。

**示例**

创建一个距离容器左侧 20px 的网格：

```javascript
options = {
  grid: {
    left: '20px'
  }
}
```

**提示**

- 网格可以包含多个子网格，通过 `subGrid` 选项配置。
- 网格还可以通过 `backgroundColor` 和 `borderColor` 选项自定义样式。
- 有关更多选项和示例，请参阅 ECharts 文档：https://echarts.apache.org/zh/option.html#grid。

**与坐标轴的关系**

GridComponent 与坐标轴组件（如 XAxisComponent 和 YAxisComponent）密切相关。坐标轴必须放置在网格区域内，网格区域决定了坐标轴的位置和范围。

**与系列的关系**

系列（如 LineSeries 和 BarSeries）也放置在网格区域内。网格区域决定了系列的位置和大小。





# Echarts双y轴对齐0刻度的思路

* [Echarts双y轴对齐0刻度的思路](https://juejin.cn/post/7282696271865364492)





# 二、使用代码

## 1. Vue2 + 纯echarts

```vue
<template>
  <div class="Echarts">
    我是图
    <div id="mainaa" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Echarts',
  methods: {
    myEcharts() {
      const ddd = document.getElementById('mainaa');
      console.log('ddd =', ddd);
      var myChart = echarts.init(ddd);
      //配置图表
      var option = {
        title: {
          text: 'echarts入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style></style>
```

### 调用

```vue
<script setup lang="ts">
import AA from '@/components/b.vue';
</script>

<template>
   <AA />
</template>
```



## 2. Vue3 + 纯echarts

```vue
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

const myEcharts = () => {
  const ddd = document.getElementById('mainaa');
  console.log('ddd =', ddd);
  var myChart = echarts.init(ddd);
  // 配置图表
  var option = {
    title: {
      text: 'echarts入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  myChart.setOption(option);
}

onMounted(() => {
  myEcharts();
})

</script>

<template>
  <div class="Echarts">
    我是图
    <div id="mainaa" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<style></style>
```



### 调用

```vue
<script setup lang="ts">
import AA from '@/components/b.vue';
</script>

<template>
   <AA />
</template>
```



## 3. Vue3 + vue-echarts + echarts

在 Vue 3 中，可以使用 `vue-echarts` 来轻松集成 ECharts。`vue-echarts` 提供了 Vue 组件化的 ECharts 图表支持，便于在 Vue 中使用指令和数据绑定。

1. **安装依赖** 安装 `echarts` 和 `vue-echarts`：

    ```bash
    npm install echarts vue-echarts
    ```

2. **全局注册组件（推荐）** 在 `main.js` 中注册 `vue-echarts`：

    ```javascript
    import { createApp } from 'vue';
    import App from './App.vue';
    import { defineAsyncComponent } from 'vue';
    import 'echarts'; // 引入 ECharts
    
    // 异步引入 ECharts 组件
    const ECharts = defineAsyncComponent(() => import('vue-echarts'));
    
    const app = createApp(App);
    
    // 全局注册 vue-echarts
    app.component('VChart', ECharts);
    
    app.mount('#app');
    ```

3. **编写 ECharts 图表组件** - 折线图组件（`LineChart.vue`）

    ```vue
    <template>
      <v-chart :options="chartOptions" style="width: 100%; height: 400px;" />
    </template>
    
    <script>
    export default {
      name: 'LineChart',
      props: {
        chartData: {
          type: Array,
          required: true,
        },
        chartLabels: {
          type: Array,
          required: true,
        },
      },
      computed: {
        chartOptions() {
          return {
            title: {
              text: '折线图示例',
            },
            tooltip: {
              trigger: 'axis',
            },
            xAxis: {
              type: 'category',
              data: this.chartLabels,
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                name: '数据',
                type: 'line',
                data: this.chartData,
              },
            ],
          };
        },
      },
    };
    </script>
    ```

4. **使用折线图组件**

#### **父组件（`App.vue`）**

```vue
<template>
  <div>
    <LineChart :chart-data="data" :chart-labels="labels" />
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue';

export default {
  name: 'App',
  components: {
    LineChart,
  },
  data() {
    return {
      labels: ['一月', '二月', '三月', '四月', '五月'],
      data: [820, 932, 901, 934, 1290],
    };
  },
};
</script>
```

------

### **功能说明**

1. **Vue 组件化**
    - `vue-echarts` 提供了 `<v-chart>` 组件，可以直接通过 `:options` 绑定 ECharts 配置。
2. **响应式更新**
    - 通过传递动态的 `chartData` 和 `chartLabels`，可以实现图表的自动更新。
3. **自适应布局**
    - 通过 `style="width: 100%; height: 400px;"` 设置图表宽高，支持动态调整。

------

### **扩展功能**

1. **异步数据** 如果数据来自后端，可以在父组件中通过 `axios` 获取后更新：

    ```javascript
    import axios from 'axios';
    
    export default {
      data() {
        return {
          labels: [],
          data: [],
        };
      },
      mounted() {
        axios.get('/api/chart-data').then((response) => {
          this.labels = response.data.labels;
          this.data = response.data.values;
        });
      },
    };
    ```

2. **全局主题** 配置全局 ECharts 主题：

    ```javascript
    import * as echarts from 'echarts';
    import 'echarts/theme/dark';
    
    echarts.registerTheme('dark', { /* 自定义主题配置 */ });
    ```

    使用主题：

    ```vue
    <v-chart :options="chartOptions" theme="dark" />
    ```

3. **多种图表类型** 配置多个 `series` 支持不同图表类型：

    ```javascript
    series: [
      { name: '数据1', type: 'line', data: [120, 132, 101, 134, 90] },
      { name: '数据2', type: 'bar', data: [220, 182, 191, 234, 290] },
    ];
    ```

------

### **注意事项**

1. **按需引入** 如果需要减少打包体积，可以结合 `vite-plugin-echarts` 或手动配置按需引入。
2. **兼容性** 确保 `vue-echarts` 和 `echarts` 的版本匹配，否则可能报错。
3. **图表自适应** 确保图表容器的大小是动态变化时，调用 `resize` 更新布局。























