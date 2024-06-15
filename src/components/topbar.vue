<template>
  <nav id="nav">
    <div class="menu">
      <div class="logo">
        <router-link to="/">
          <img src="/static/logo.png" width="36" />
          <span class="default">
            FiGiBook.com
          </span>
        </router-link>
      </div>
      <div>
        <router-link to="/"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item default">
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
        <div class="menu-item default" @click="show_profile">
          Profile
        </div>
        <div class="menu-item">
          <a href="https://wa.me/25771208396" target="_blank">Contact</a>
        </div>
      </div>
      <div class="right">
        <div class="menu-item" v-if="!!active_user" @click="logout">
          Se Deconnecter
        </div>
        <div class="menu-item" v-else @click="$store.state.login_shown=true">
          Connexion
        </div>
        <router-link
          to="/create"
          v-slot="{ href, navigate, isActive, isExactActive }">
          <div class="menu-item">
            <button :href="href" :class="{ selected: isActive }" class="btn default">
              <i class="pi pi-plus" style="font-weight: 900; color:white"></i>
              Ajouter une Salle
            </button>
            <button :href="href" :class="{ selected: isActive }" class="btn responsive">
              <i class="pi pi-plus" style="font-weight: 900; color:white"></i>
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
    logout() {
      if(window.confirm("Voulez-vous vraiment vous deconnecter?")){
        this.$store.state.user = null;
      }
    },
    show_profile(){
      if(!this.active_user){
        this.$store.state.login_shown = true
      } else {
        alert(`Vous êtes connecté comme ${this.active_user.first_name} ${this.active_user.last_name}`)
        this.$store.state.profile_shown=true
      }
    }
  },
  mounted(){
  }
};
</script>
<style scoped>
@keyframes submenu {
	from {
    margin-top: -5px;
    opacity: .5;
	}
	to {
    margin-top:0;
    opacity: 1;
	}
}
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
  color: black;
  cursor: pointer;
  text-align: center;
}
.submenu .content{
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px #999;
}
.content-item:hover .submenu{
  display: block;
  text-align: left;
  animation: submenu .5s;
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
@media only screen and (max-width: 600px) {
  .menu-item{
    padding: 5px;
    color: black;
    cursor: pointer;
  }
}
</style>
