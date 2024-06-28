import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { projectAuth, projectFirestore } from './firebase/config'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // This includes Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faPlus, faXmark , faPhone, faEnvelope, faCirclePlus, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faXmark, faPhone, faEnvelope,faCirclePlus, faCircleXmark);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

app.config.globalProperties.$firestore = projectFirestore

app.use(router)
app.mount('#app')
