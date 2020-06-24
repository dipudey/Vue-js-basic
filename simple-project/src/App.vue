<template>
  <div id="app">

    <navbar @search="search"></navbar>

      <div class="container mt-4">
        <div class="row">
          <div class="col-md-9">
            <inventory @addNewCartItem="addCartItem" :items="items"></inventory>
          </div>
          <div class="col-md-3">
            <cart @itemRemoved="removeCart" :items="cart"></cart>
          </div>
        </div>

      </div>


  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  import Inventory from "./components/Inventory"
  import Cart from "./components/Cart"
  import data from "./data.js"

  export default {
    components:{
      Navbar,
      Cart,
      Inventory
    },
    data(){
      return {
        items : [],
        cart: []
      }
    },
    mounted(){
      this.items = data
    },
    methods:{
      search(keyword) {
        this.items = data.filter(item => {
          return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
      },
      addCartItem(item) {
        this.cart.push(item)
      },
      remvoeCart(i){
        this.cart.splice(i,1)
      }
    }
  }
</script>

<style>

</style>
