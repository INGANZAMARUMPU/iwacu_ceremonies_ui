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
                  Salles
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
                  to="/reservations"
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
        <div class="content-item">
          <div class="menu-item parent-menu">
            <router-link to="/list"
              v-slot="{ href, navigate, isActive, isExactActive }">
              <div>
                <a :href="href" :class="{ selected: isActive }">
                  Voitures
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
                      Tout les voitures
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/mine"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Mes voitures
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/reservations"
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
      </div>
      <div class="right">
        <div class="menu-item" v-if="!!active_user" @click="logout">
          Se Deconnecter
        </div>
        <div class="menu-item" v-else @click="$store.state.login_shown=true">
          Connexion
        </div>
        <div @click="toggleMenu" id="add_button" @mouseleave="hideAdd">
          <div class="menu-item">
            <div>
              <button class="btn default">
                <i class="pi pi-plus" style="font-weight: 900; color:white"></i>
                Ajouter
              </button>
              <button class="btn responsive">
                <i class="pi pi-plus" style="font-weight: 900; color:white"></i>
              </button>
            </div>
            <div class="submenu">
              <div class="content">
                <router-link
                  to="/edit-salle"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Une salle
                    </a>
                  </div>
                </router-link>
                <router-link
                  to="/edit-voiture"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <div class="submenu-item">
                    <a :href="href" :class="{ selected: isActive }">
                      Une voiture
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
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
    },
    toggleMenu(){
      add_button.classList.toggle("content-item")
    },
    hideAdd(){
      add_button.classList.remove("content-item")
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
