<template>
  <div class="content">
    <div class="first-row"></div>
    <div class="second-row">
      <event-table/>
    </div>
  </div>
</template>

<script>
import eventTable from '@/components/eventTable'

export default {
  name: "index",
  props: {},
  components: {eventTable,},
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  height: 10.8rem;
  width: 19.2rem;
  /*height: 1080px;*/
  /*width: 1920px;*/
  background-image: url("../../assets/background.png");
  background-size: cover;
}
.first-row {
  margin-top: 10%;
}
.second-row {
  width: 80%;
  height: 80%;
  background-color: white;
  margin: 0 auto;
  text-align: center;
}
</style>
