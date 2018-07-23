<template>
  <nav class="navbar is-dark"
       role="navigation"
       aria-label="main navigation">
    <div class="navbar-brand nav-height">
      <a class="navbar-item"
         :href="homeUrl">
        <b>예나르</b>의 유틸 페이지 :-D
      </a>
      <a role="button"
         class="navbar-burger"
         aria-label="menu"
         aria-expanded="false">
         <!--<span aria-hidden="true"></span>-->
         <!--<span aria-hidden="true"></span>-->
         <!--<span aria-hidden="true"></span>-->
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      homeUrl: process.env.FRONT_BASE_URL,
    }
  },
}
</script>

<style scoped>
a {
  color: whitesmoke;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}

.navbar {
  width: 100%;
  border: 0;
}

.nav-height {
  height: 53px;
  line-height: 53px;
}

.navbar-item {
  text-align: left;
  margin: auto;
  padding-left: 10px;
  font-size: 25px;
}
</style>
