<template>
  <nav id="nav">
    <div class="menu">
      <div class="logo">
        <router-link to="/">
          <img src="/static/logo.png" width="36" />
          FiGiBook.com
        </router-link>
      </div>
      <div>
        <router-link to="/"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item">
            <a :href="href" :class="{ selected: isActive }">
              Accueil
            </a>
          </div>
        </router-link>
        <div class="content-item">
          <div class="menu-item parent-menu">
            <router-link to="/list"
              v-slot="{ href, navigate, isActive, isExactActive }">
              <div>
                <a :href="href" :class="{ selected: isActive }">
                  Les salles
                  <i class="pi pi-angle-down" style="color:var(--primary)"></i>
                </a>
              </div>
            </router-link>
            <div class="submenu">
              <div class="content">
                <router-link
                  to="/list"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Tout les salles
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/mine"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Mes salles
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/produits"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Mes reservations
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <router-link
          to="/produits"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item">
            <a :href="href" :class="{ selected: isActive }">
              Profile
            </a>
          </div>
        </router-link>
        <router-link
          to="/produits"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item">
            <a :href="href" :class="{ selected: isActive }">
              Contact
            </a>
          </div>
        </router-link>
      </div>
      <div class="right">
        <div class="menu-item" v-if="!!active_user">
          <a href="#" @click="login">
            Se Connecter
          </a>
        </div>
        <div class="menu-item" v-else>
          <a href="#" @click="login">
            Se Deconnecter
          </a>
        </div>
        <router-link
          to="/produits"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item">
            <button :href="href" :class="{ selected: isActive }" class="btn">
              <i class="pi pi-plus" style="font-weight: 900; color:white"></i>
              Ajouter une Salle
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
  },
  methods: {
  },
  mounted(){
  }
};
</script>
<style scoped>
#nav{
  background-color: #FFFE;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  box-shadow: 0 0 5px #999;
}
.menu, .menu > *{
  display: flex;
  align-items: center;
}
a{
  color: #333;
}
.menu{
  margin: auto;
  justify-content: space-between;
}
.logo{
  padding: 10px 20px;
}
.submenu{
  position: absolute;
  z-index: 10;
  display: none;
  padding: 20px 5px 5px 5px;
  margin-left: -5px;
}
.menu-item{
  padding: 15px;
}
.submenu .content{
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px #999;
}
.content-item:hover .submenu{
  display: block;
}
.submenu-item{
  padding: 10px;
}
.content-item{
  height: 100%;
}
a:hover{
  color: var(--secondary);
}
</style>
