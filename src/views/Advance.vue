<template>
  <div class="advance">
    <div class="advance-container">
      <vue-calendar-custom :datetime="datetime">
        <div :slot="'slot'+item.$vue_calendar_id" v-for="item in daysList" @click="triggerClick(item)"
             class="calendar-days-item" :class="{rest:item.week==0||item.week==6,current:item.$vue_calendar_today}"
        >
          <div class="days-item-content-container">
            <span class="days-item-content-date">{{item.$vue_calendar_date}}</span>
          </div>
        </div>
      </vue-calendar-custom>
    </div>
    <div class="choose">
      <month-choose v-model="datetime"></month-choose>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    name:'advance',
    data(){
      return  {
        datetime: new Date(),
        daysList:[],
      }
    },
    watch: {
      datetime: {
        handler(val,oldVal) {
          this.daysList = this.$initCalendar(val);

          _(this.daysList).forEach((o,index)=> {
            console.log(o);
          });
        },
        immediate:true
      }
    },
    methods: {
      triggerClick(item) {
        alert(item.$vue_calendar_datetime);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .advance {
    position: relative;
    .advance-container {
      position: relative;
      width: 1100px;
      height: 800px;
      margin: 0 auto;


      .calendar-days-item {
        width: 100%;
        height: 100%;
        user-select: none;
        display: flex;
        justify-content: flex-start;
        &.rest {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="100%" y1="0" x2="0" y2="100%" style="stroke:rgb(228,228,228);stroke-width:1"/></svg>');
        }
        &.current {
          color: white;
          background-color: #cf2e33;
        }
        .days-item-content-container {
          padding: 10% 0 0 10%;
          .days-item-content-date {
            font-size: 18px;
          }
        }

        &:hover {
          background-color: #cf2e33;
          opacity: .3;
        }
      }
    }
    .choose {
      position: absolute;
      left: 30px;
      top: 20px;
    }
  }
</style>
