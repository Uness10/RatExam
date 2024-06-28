<template>
	<aside :class="{ 'is-expanded': isExpanded }">
  
	  <div class="menu-toggle-wrap">
		<button class="menu-toggle" @click="toggleMenu">
		  <span class="material-icons">keyboard_double_arrow_right</span>
		</button>
	  </div>
  
	  <div class="menu">
		<router-link to="/dashboard/profile" class="button">
		  <span class="material-icons">person</span>
		  <span class="text">Profile</span>
		</router-link>
		<router-link to="/dashboard" class="button">
		  <span class="material-icons">home</span>
		  <span class="text">Dashboard</span>
		</router-link>
		<router-link to="/dashboard/myresumees" class="button">
		  <span class="material-icons">assignment_ind</span>
		  <span class="text">My Resumes</span>
		</router-link>
	  </div>
  
	  <div class="flex"></div>
  
	  <div class="menu">

		<button class="button" @click="handleLogout">
		  <span class="material-icons">exit_to_app</span>
		  <span class="text">Log Out</span>
		</button>
	  </div>
	</aside>
  </template>
  
  <script>
  import logoURL from '../assets/logo.png';
  import logout from '../composables/useLogout';
  import getUser from '@/composables/getUser';
  
  export default {
	name: 'SideBar',
	data() {
	  return {
		isExpanded: localStorage.getItem("is_expanded") === "true",
		user: null,
		logoURL: logoURL,
	  }
	},
	methods: {
	  toggleMenu() {
		this.isExpanded = !this.isExpanded;
		localStorage.setItem("is_expanded", this.isExpanded.toString());
	  },
	  async handleLogout() {
		try {
		  await logout();
		  this.user = null;
		  this.$router.push('/welcome');
		} catch (error) {
		  console.error('Error during logout:', error);
		}
	  }
	},
	mounted() {
	  this.user = getUser();
	}
  }
  </script>
  
  <style lang="scss" scoped>
  aside {
	display: flex;
	flex-direction: column;
	background: linear-gradient(10deg,#1e3c72 ,#2a5298);
	color: var(--light);
	width: calc(2rem + 32px);
	padding: 1rem;
	transition: 0.2s ease-in-out;
	margin-right: 10%;
    position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	z-index: 1;
	.flex {
	  flex: 1 1 0%;
	}
  
	.logo {
	  margin-bottom: 1rem;
	  img {
		width: 2rem;
	  }
	}
  
	.menu-toggle-wrap {
	  display: flex;
	  justify-content: flex-end;
	  margin-bottom: 1rem;
	  transition: 0.2s ease-in-out;
  
	  .menu-toggle {
		transition: 0.2s ease-in-out;
		.material-icons {
		  font-size: 2rem;
		  color: var(--light);
		  transition: 0.2s ease-out;
		}
		&:hover {
		  .material-icons {
			color: var(--primary);
			transform: translateX(0.5rem);
		  }
		}
	  }
	}
  
	h3, .button .text {
	  opacity: 0;
	  transition: opacity 0.3s ease-in-out;
	}
  
	h3 {
	  color: var(--grey);
	  font-size: 0.875rem;
	  margin-bottom: 0.5rem;
	  text-transform: uppercase;
	}
  
	.menu {
	  margin: 0 -1rem;
  
	  .button {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: 0.2s ease-in-out;
		padding: 0.5rem 1rem;
  
		.material-icons {
		  font-size: 2rem;
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
		.text {
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
  
		&:hover {
		  background-color: var(--dark-alt);
		  .material-icons, .text {
			color: var(--primary);
		  }
		}
  
		&.router-link-exact-active {
		  background-color: var(--dark-alt);
		  border-right: 5px solid var(--primary);
		  .material-icons, .text {
			color: var(--primary);
		  }
		}
	  }
	}
  
	&.is-expanded {
	  width: var(--sidebar-width);
	  .menu-toggle-wrap {
		top: -3rem;
		.menu-toggle {
		  transform: rotate(-180deg);
		}
	  }
	  h3, .button .text {
		opacity: 1;
	  }
	  .button .material-icons {
		margin-right: 1rem;
	  }
	}
  

  }
  </style>
  