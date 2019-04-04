<template>
  <div class="se-calendar">
    <div class="se-calendar-header se-flex-row">
      <span class="btn">PREV</span>
      <span class="time-label">{{currentYear}}年{{currentMonth}}月</span>
      <span class="btn">NEXT</span>
    </div>
    <div class="se-calendar-content se-flex-row">
      <div
        v-for="date in dateArr"
        :key="`${currentYear}-${date.thisMonth}-${date.showDate}`"
        class="se-calendar-dateitem"
      >{{date.showDate}}</div>
    </div>
    <div class="se-calendar-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'SeCalendar',
  data() {
    return {
      currentYear: '',
      currentMonth: '',
      currentDate: '',
      // 一月日历数组
      dateArr: []
    }
  },
  methods: {
    getMonthDate(year, month) {
      const today = new Date()
      const result = []
      if (!year) {
        year = today.getFullYear()
        this.currentYear = year
      }
      if (!month) {
        month = today.getMonth() + 1
        this.currentMonth = month
      }

      // 该月第一天日期对象
      let firstDay = new Date(year, month - 1, 1)
      // 该月最后一天日期对象
      let lastDay = new Date(year, month, 0)
      // 该月第一天星期几
      let firstDayWeekDay = firstDay.getDay()
      // 该月最后一天日期
      let lastDate = lastDay.getDate()

      // 上月最后一天
      let lastMonthLastDay = new Date(year, month - 1, 0)
      // 上月最后一天星期几
      let lastMonthLastDate = lastMonthLastDay.getDate()

      // 6x7中显示上一个月的天数值
      let preMonthDayCount = firstDayWeekDay - 1

      for (let i = 0; i < 6 * 7; i++) {
        let obj = {
          date: i - preMonthDayCount,
          thisMonth: month,
          showDate: i - preMonthDayCount
        }
        if (obj.date <= 0) {
          obj.thisMonth = month - 1
          obj.showDate = lastMonthLastDate + obj.date
        } else if (obj.date > lastDate) {
          obj.thisMonth = month + 1
          obj.showDate = obj.showDate - lastDate
        }

        result.push(obj)
      }

      this.dateArr = result
    }
  },
  created() {
    this.getMonthDate()
  }
}
</script>

<style lang="scss" scoped>

</style>
