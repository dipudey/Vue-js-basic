<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-4">
            <li class="nav-item active"><router-link :to="{ path:'/' }" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path:'/test' }" class="nav-link">Test</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
  export default{
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      // search() {
      //   return this.$emit('search',this.keyword)
      // }
    }
  }
</script>
<style>

</style>
