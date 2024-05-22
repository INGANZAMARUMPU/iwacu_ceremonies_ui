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
          <div class="menu-item" @click="closeNav(navigate)">
            <a :href="href" :class="{ selected: isActive }">
              Accueil
            </a>
          </div>
        </router-link>
        <div class="content-item">
          <div class="menu-item parent-menu" @click="closeNav(navigate)">
            <router-link to="/"
              v-slot="{ href, navigate, isActive, isExactActive }">
              <div @click="closeNav(navigate)">
                <a :href="href" :class="{ selected: isActive }">
                  Les salles
                  <i class="pi pi-angle-down" style="color:var(--primary)"></i>
                </a>
              </div>
            </router-link>
            <div class="submenu">
              <div>
                <router-link
                  to="/investissements"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item" @click="closeNav(navigate)">
                    <a :href="href" :class="{ selected: isActive }">
                      Tout les salles
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/passifs"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item" @click="closeNav(navigate)">
                    <a :href="href" :class="{ selected: isActive }">
                      Mes salles
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/produits"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item" @click="closeNav(navigate)">
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
          <div class="menu-item" @click="closeNav(navigate)">
            <a :href="href" :class="{ selected: isActive }">
              Profile
            </a>
          </div>
        </router-link>
        <router-link
          to="/produits"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item" @click="closeNav(navigate)">
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
          <div class="menu-item" @click="closeNav(navigate)">
            <button :href="href" :class="{ selected: isActive }">
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
#nav:hover{
  background-color: #FFFE;
}
#nav{
  background-color: #FFF9;
  border-bottom: 2px solid #9995;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
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
  background-color: white;
}
.menu-item{
  padding: 15px;
}
.submenu{
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px #999;
  display: none;
}
.menu-item:has(a:hover) .submenu{
  display: block;
}
.submenu-item{
  padding: 10px;
}
.content-item{
  height: 100%;
}
a:hover{
  color: var(--primary);
}
</style>
