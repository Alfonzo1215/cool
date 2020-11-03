Vue.component('counter', {
  data: function(){
    return{
      number:0
    }
  },
  props:['mess'],
  methods:{
    increaseStuff:function(){
      this.number++;
      this.$emit("inc");
    }
  },
  template:`<button v-on:click="increaseStuff">{{mess}} {{number}} times</button>`
})

var app = new Vue({
  el:"#app",
  data:{
    text:"",
    message:"",
    messages:["You have clciked ", "Clicked"],
    numb:0
  },
  computed:{
    textCount: function(){
      return this.text.length+" characters"
    }
  },
  watch:{
    text: function(){
      if(this.text.length>2){
        this.message="This string has less than 2 characters"
      }else{
        this.message="This string is 10 or less characters"
      }
    },
  
    list: [
      { name: "Protagonist", codename: "Joker", flipped: false },
      { name: "Anne", codename: "Panther", flipped: false },
      { name: "Ryuji", codename: "Skull", flipped: false }
    ]
  },