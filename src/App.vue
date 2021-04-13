<template>
    <div id="app">

      <div class="preloader" :class="{hiddenPreloader : !preloader}">
        <img src="./assets/img/logo.svg" class="wow fadeIn">
      </div>
      
      <Header />
  
      <router-view></router-view>
      
      <Footer />


    </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import {mapGetters} from 'vuex'
import axios from 'axios'

  export default{
  	data(){
  		return{
        preloader: true,
  			results: []
  		}
  	},
  	components: {Header, Footer},
  	computed: {
  		...mapGetters({
  			cities: "serv/getCities"
  		})
  	},
  	methods: {
  		
      yaMapInit2() {
      var suggestView1 = new ymaps.SuggestView("suggest", {
        provider: {
          suggest: function (request, options) {
            return ymaps.suggest(request);
          },
        },
      });

      var suggestView2 = new ymaps.SuggestView("suggest2", {
        provider: {
          suggest: function (request, options) {
            return ymaps.suggest(request);
          },
        },
      });

      var suggestView3 = new ymaps.SuggestView("suggest3", {
        provider: {
          suggest: function (request, options) {
            return ymaps.suggest(request);
          },
        },
      });

      var suggestView4 = new ymaps.SuggestView("suggest4", {
        provider: {
          suggest: function (request, options) {
            return ymaps.suggest(request);
          },
        },
      });

      // suggestView1.events.add("select", (e) => {
      //   // select event
      //   this.zakaz.street = e.get("item").value;

      //   let porez1 = this.zakaz.street.replace("Россия,", "");
      //   this.zakaz.street = porez1;

      //   if (this.zakaz.street.includes("Санкт-Петербург,")) {
      //     let porez2 = this.zakaz.street.replace("Санкт-Петербург,", "");
      //     this.zakaz.street = porez2;
      //   } else {
      //     let porez3 = this.zakaz.street.replace("Москва,", "");
      //     this.zakaz.street = porez3;
      //   }
      // });


      },
  	},
  	created(){

    //инициализируем и подключаем карты

    const script = document.createElement("script");

    script.onload = () => {
      ymaps.ready(() => this.yaMapInit2());
    };

    script.id = "ymaps";
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU";
    document.head.append(script);

    //инициализируем и подключаем карты
  	},
    mounted(){
      setTimeout(()=>{
        this.preloader = false;
      }, 2500);
    }
  }
</script>

<style>
.preloader{
  position: fixed;
  z-index: 300;
  background-color: rgba(0,0,0,.2);
  backdrop-filter: blur(70px);
  -webkit-backdrop-filter: blur(70px);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 1;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hiddenPreloader{
  opacity: 0;
  z-index: -5;
}
</style>






