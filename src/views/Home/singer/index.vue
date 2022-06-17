<template>
  <div>
       <div class="new">
      <div class="list">
         <div class="header">
        <a href="">全部</a>      
      <div class="body">
        <div class="mg">
          <li v-for="artist in homeSinger" :key="artist.id">
            <img :src="artist.img1v1Url" alt="" />
            <router-link
              :to="{ path: '/artists', query: { id: `${artist.id}` } }"
              >{{ artist.name }}</router-link
            >
          </li>
        </div>
          
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
name:'singer',
 mounted() {
    this.$store.dispatch("getHomeSinger");
  },
  computed: {
    ...mapState({
      homeSinger: (state) => state.home.homeSinger,
    }),
  },
}
</script>

<style scoped>
.mg{
  margin-top:50px;
  /* margin-top: -90px; */
    display: flex;
    flex-wrap: wrap;
}
.new .list {

  padding: 20px 20px 20px 30px;
  width: 1000px;
  position: relative;
  left: 0;
  background-color: #fff;
   border: 1px solid #ddd;
  border-bottom: none;
  border-top: none;
}
.new {
  width: 1010px;
  display: flex;
  margin: 0 auto;
  height: 1950px;
}
.new .header {
    margin-top: 100px;
    width: 100%;
    height: 33px;
    padding: 0 2px 0 0px;
    border-bottom: 2px solid #0c60c1;
}
.new .header a {
    float: left;
    margin-left: 5px;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    color: #333;
}
.new .header .more {
    width: 45px;
    height: 16px;
    margin: 9px;
    float: right;
}
.new .header .more a {
    font-size: 12px;
    color: #666;
    line-height: 15px;
}
.new .list .body {
  margin-top: -90px;
  display: flex;
  flex-wrap: wrap;
}
.new .list .body li {
  width: 170px;
  height: 234px;
  padding-left: 42px;
  /* padding-bottom: 30px;
  padding-top: 60px; */
  position: relative;
}

.new .list .body li img {
  width: 140px;
  height: 140px;
  display: block;
}
.new .list .body li a {
  display: inline-block;
  color: #000;
  font-size: 14px;
  margin-top: 5px;
  width: 140px;
}
</style>