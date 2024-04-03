<script setup lang="ts">
import { ref, defineProps } from 'vue'
import moment from 'moment';

// Props
const myProps = defineProps({
  type: {
    type: String,
    default: 'daterange',
  },
  // 日期范围是否显示00:00:00 23:59:59时分秒
  plusTime: {
    type: Boolean,
    default: false,
  },
  startPlaceholder: {
    type: String,
    default: '开始时间',
  },
  endPlaceholder: {
    type: String,
    default: '结束时间',
  },
  rangeSeparator: {
    type: String,
    default: '~',
  },
})

// 抛出事件
const myEmits = defineEmits(['update:modelValue', 'change'])


// 时间范围
const timeRangeValue = ref<[string, string]>([
  moment().subtract(29, "days").format("YYYY-MM-DD"), //当前时间的前29天时间
  moment().format('YYYY-MM-DD'),
])

// 禁用当前日期之后的日期
function disabledDate_Sensor(time: any) {
  // Date.now()是javascript中的内置函数，它返回自1970年1月1日00:00:00 UTC以来经过的毫秒数。
  return time.getTime() > Date.now();
}

// 时间变化响应
const dateChange = (val: any[]) => {
  console.log('datePickerChanged_Sensor = ', timeRangeValue.value);
  const { type, plusTime } = myProps;
  if (type === 'daterange' && val) {
    let startTime = val[0]
    let endTime = val[1]
    if (plusTime) {
      startTime = startTime + ' 00:00:00'
      endTime = endTime + ' 23:59:59'
    }
    timeRangeValue.value = [startTime, endTime]
    emits('change', [startTime, endTime])
  } else {
    emits('change', val)
  }
}

</script>

<script lang="ts">
// 组件名
export default {
  name: 'MyDatePicker',
}
</script>

<template>
  <div class="my-date-picker">
    <el-date-picker v-model="timeRangeValue" :editable="false" :type="type" format="YYYY-MM-DD"
      value-format="YYYY-MM-DD" :start-placeholder="startPlaceholder" :range-separator="rangeSeparator"
      :end-placeholder="endPlaceholder" placeholder="选择日期范围" size="default" popper-class="timeDarkHourBox"
      :disabled-date="disabledDate_Sensor" @change="dateChange" />
  </div>
</template>



<!-- -->
<style lang="scss" scoped>
.my-date-picker {
  background-color: transparent;
}
</style>



<!-- 日期选择器 样式 -->
<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  width: 100%;
  height: 100%;
  background: radial-gradient(18% 98.3% at 50% 118%, #4da3ff 0%, #0b1c47 100%) !important;
  box-shadow: inset 0 0 8px 0 #2687ff63 !important;
  color: #FFFFFF !important;
  border: 1px solid #2a78cf !important;
  border-radius: 20px;
}

:deep(.el-date-editor .el-range-input) {
  color: #FFFFFF;
  background: transparent;
}

:deep(.el-date-editor .el-range-separator) {
  color: #FFF;
}
</style>



<!-- 日期选择器 弹框样式 -->
<style lang="scss">
.timeDarkHourBox {
  border: 1px solid rgba(94, 217, 237, 0.8) !important;

  .el-date-range-picker {
    --el-datepicker-inner-border-color: #5ED9ED;
  }

  // 背景板
  .el-picker-panel__body {
    background-color: #020215;
  }

  .el-date-range-picker__header {
    color: #5ED9ED; // rgba(94, 217, 237, 0.8);
  }

  .el-picker-panel__icon-btn {
    color: #5ED9ED;
  }

  .el-date-table td.end-date .el-date-table-cell__text,
  .el-date-table td.start-date .el-date-table-cell__text {
    background-color: rgba(94, 217, 237, 0.8);
  }

  .el-date-table td .el-date-table-cell {
    padding: 0px;
  }

  .el-date-table td.available:hover {
    .el-date-table-cell__text {
      background-color: rgba(94, 217, 237, 0.8);
    }

    color: #FFF;
    font-size: 14px;
    border-radius: 50%;
  }

  .el-date-table .el-date-table-cell:hover {
    background-color: transparent;
  }

  .el-date-table td.in-range .el-date-table-cell:hover {
    background-color: #686976;
  }

  .el-date-table td.in-range .el-date-table-cell {
    background-color: #686976;
  }

  .el-date-table {
    tr {
      th {
        color: #5ED9EDCC;
        border-bottom: solid 1px rgba(94, 217, 237, 0.8) !important;
      }

      td {
        color: #5ED9EDCC;
        font-size: 12px;

        .el-date-table-cell__text {
          width: 30px;
          height: 30px;
          line-height: 30px;
        }
      }
    }

    .prev-month {
      color: #5ED9ED80;
    }

    .next-month {
      color: #5ED9ED80;
    }

    .el-date-table__row {
      color: green;

      .disabled {
        div {
          color: #FFF;
          background: transparent;
        }
      }
    }
  }
}
</style>
