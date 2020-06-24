<template>

        <div class="row">

          <div v-for="(item,index) in items" :key="index" class="col-4">
            <div class="card">
              <img :src="item.picture" class="card-img-top" alt="" height="175">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-primary">Add</a>
              </div>
            </div>
          </div>


        </div>


</template>

<script>
  export default{
    props: ['items'],
    methods:{
      addToCart(item) {
        this.$emit('addNewCartItem',item)
      }
    }
  }
</script>
<style>

</style>
