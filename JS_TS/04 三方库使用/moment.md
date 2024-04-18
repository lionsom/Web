# 近一年

近一天：

```javascript
moment().day(moment().day() - 1).format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推一天的时间
moment().format('YYYY-MM-DD HH:mm:ss') 
12
```

近三天：

```javascript
moment().day(moment().day() - 2).format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推2天的时间
moment().format('YYYY-MM-DD HH:mm:ss') 
12
```

近一周：

```javascript
moment().day(moment().day() - 6).format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推一周的时间
moment().format('YYYY-MM-DD HH:mm:ss') 
12
```

近一个月：

```javascript
moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推一个月的时间
moment().format('YYYY-MM-DD HH:mm:ss')

12
```

近三个月：

```javascript
moment().subtract(1, 'quarters').format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推三个月的时间
moment().format('YYYY-MM-DD HH:mm:ss')
12
```

近六个月：

```javascript
moment().subtract(6, 'months').format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推六个月的时间
moment().format('YYYY-MM-DD HH:mm:ss') 
12
```

近一年：

```javascript
moment().subtract(1, 'years').format('YYYY-MM-DD HH:mm:ss') // 当前时间往前推一年的时间
moment().format('YYYY-MM-DD HH:mm:ss') 
```



# 当年、当月

当前年：

```js
moment().format("YYYY") 
moment().year(); // Number
```

当前月：

```scss
moment().format('MM')
```

当前季度：

```scss
moment().quarter()
```

上一年/下一年

```js
// 上一年：
moment().add(-1, 'y').format("YYYY")

// 下一年：
moment().add(1, 'y').format("YYYY")

// 上几年和下几年同理，做momment日期加减，月季度亦同理
```

上一季度/下一季度

```js
// 上一季度：
moment().add(-1, 'Q').quarter()

// 下一季度：
moment().add(1, 'Q').quarter()
```

年开始结束时间

```scss
moment().startOf('year')
moment().endOf('year')
```

季度开始结束时间

```erlang
// 当前季度的开始结束时间：
moment().startOf('quarter').format("YYYY-MM-DD")
moment().endOf('quarter').format("YYYY-MM-DD")

// 指定年指定季度的开始结束时间：（某年某季度的开始结束时间）
moment(moment().format("YYYY-02-01")).startOf('quarter').format("YYYY-MM-DD")
moment(moment().format("YYYY-02-01")).endOf('quarter').format("YYYY-MM-DD")
```

月度开始结束时间

```scss
moment().startOf('month')
moment().endOf('month')
```





# 最后一天

moment.js获取某年某月的最后一天

```javascript
moment(日期).endOf('month').format("YYYY-MM-DD")//日期可以是 年月的格式 也可以是年月日的格式
```

moment.js获取某年的最后一天

```javascript
moment(日期).endOf('year').format("YYYY-MM-DD")//日期可以是年的格式 或者 年月的格式 也可以是年月日的格式
```
