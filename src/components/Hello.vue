<template>
  <div class="hello">
    <h1>{{ userInfo.nickname }}  {{userInfo.sex==1?'男':'女'}}</h1>
    <h2>{{userInfo.country}}</h2>
    <img :src="userInfo.headimgurl"/>
    <h2>{{$route.params.openid}}</h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      userInfo:{}
    }

  },
  mounted(){
    this.axios.post(this.$store.state.serverurl+'getwxUserInfo',{
      openid:this.$route.params.openid
    }).then((response) => {
      var data = response.data;
//      alert(JSON.stringify(data));
      if (data.status) {
        this.userInfo = data.result;
      }else{
        alert(data.err_msg);
      }
    })
//    this.axios.get(this.$store.state.serverurl+'getwxUserInfo',{
//      params:{openid:this.$route.params.openid}
//    }).then((response) => {
//      var data = response.data;
//      console.log(data);
//      if (data.status) {
//        this.userInfo = data.result;
//      }else{
//        alert(data.err_msg);
//      }
//    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
