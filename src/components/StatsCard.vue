<script setup>
import {formatBandwithBytes, formatBytes} from "../utils/utils.js";
import {inject} from "vue";

const handleChangeType = inject('handleChangeType')

const { stats, type } = defineProps({
  stats: {
    type: Object,
    default: () => ({
      total: 0,
      online: 0,
      offline: 0,
      bandwidth_up: 0,
      bandwidth_down: 0,
    }),
  },
  type: {
    type: String,
    default: "all",
  }
})

</script>

<template>

  <div class="hero">
    <a-row :gutter="20">
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card all" :class="type === 'all' ? 'is-active' :''" @click="handleChangeType('all')">
          <div class="title">服务器总数</div>
          <div class="value">
            <div class="status" style="background: #7EBDCE;"></div>
            <span class="num">{{stats.total}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card online" :class="type === 'online' ? 'is-active' :''" @click="handleChangeType('online')">
          <div class="title">在线服务器</div>
          <div class="value">
            <div class="status" style="background: #1fb416;"></div>
            <span class="num">{{stats.online}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card offline" :class="type === 'offline' ? 'is-active' :''" @click="handleChangeType('offline')">
          <div class="title">离线服务器</div>
          <div class="value">
            <div class="status" style="background: #FF5757;"></div>
            <span class="num">{{stats.offline}} 台</span>
          </div>
        </div>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" :sl="6">
        <div class="hero-card">
          <img class="hero-img" src="/public/bocchi-face.png" alt="">
          <div class="title">
            网络情况
            <span class="norun">别跑了别跑了！ ๐·°(৹˃̵﹏˂̵৹)°·๐</span>
          </div>
          <div class="value" style="display: block;">
            <div>
              流量
              <icon-arrow-up style="font-size: 14px;color: #FFAE4F;" />
              <span style="font-size: 14px;color: #FFAE4F;"> {{formatBytes(stats.traffic_up)}}</span>
              &nbsp;
              <icon-arrow-down style="font-size: 14px;color: #7EBDCE;" />
              <span style="font-size: 14px;color: #7EBDCE;">{{formatBytes(stats.traffic_down)}}</span>
            </div>
            <div>
              带宽
              <icon-up-circle style="font-size: 14px;" />
              <span style="font-size: 14px;"> {{formatBandwithBytes(stats.bandwidth_up)}}</span>
              &nbsp;
              <icon-down-circle style="font-size: 14px;" />
              <span style="font-size: 14px;"> {{formatBandwithBytes(stats.bandwidth_down)}}</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  margin: 30px 10px 0px 10px;

  .hero-img {
    width: 100px;
    position: absolute;
    right: 50px;
    top: -72px;
  }

  .hero-card {
    margin-bottom: 20px;
    padding: 12px 24px;
    border: 2px solid #e5e5e5;
    border-radius: 6px;
    background: #ffffff;
    min-height: 72px;
    box-shadow: 0 2px 4px 0 rgba(133, 138, 180, 0.14);
    cursor: pointer;

    &.is-active,
    &:hover {
      &.all {
        border-color: #7EBDCE;
      }

      &.online {
        border-color: #1fb416;
      }

      &.offline {
        border-color: #FF5757;
      }
    }

    .title {
      margin-top: 6px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 14px;
      .norun {
        padding-left: 10px;
        font-size: 12px;
        font-weight: 200;
        color: #fc7192;
      }
    }

    .value {
      display: flex;
      align-items: center;
      .status {
        margin-right: 6px;
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: #333333;
      }

      .num {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}

body[arco-theme='dark'] {
  .hero-img {
    opacity: 0.6;
  }
  .hero-card {
    border: 2px solid rgb(255 255 255 / 16%);
    box-shadow: none;
    background-color: #000000;
    color: #ffffff;
  }
}
</style>