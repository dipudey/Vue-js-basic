<template>

        <div v-if="!loding" class="row">

          <div v-for="(item,index) in items" :key="index" class="col-4">
            <div class="card">
              <img src="http://dummyimage.com/124x225.png/dddddd/000000" class="card-img-top" alt="" height="175">
              <div class="card-body">
                <router-link :to="{ path:'/item/'+ item.id }"><h5 class="card-title">  {{ item.name }}</h5></router-link>
                <p class="card-text">{{ item.totalPrice }}</p>
                <!-- <a @click="addToCart(item)" class="btn btn-primary">Add</a> -->
              </div>
            </div>
          </div>
          


        </div>
        <h1 v-else>Loding...</h1>

</template>

<script>
  import axios from 'axios'

  export default{
    data() {
      return {
        loding: true,
        items: []
      }
    },
    mounted(){
      this.fetchInventory()
    },
    methods:{
      // addToCart(item) {
      //   this.$emit('addNewCartItem',item)
      // }
      fetchInventory(){
        var self = this
        axios.get('http://127.0.0.1:8000/api/product').then(response => {
          console.log(response)
          self.items = response.data.data,
          this.loding = false
        })
      }
    }
  }
</script>
<style>

</style>
