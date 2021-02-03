<template>
  <div class="mouse-effects-wrapper">
  </div>
</template>
<script>
export default {
  name: 'MouseEffects',
  data() {
    return {
     entities: []
    };
  },
  created() {
    let _self=this;
    _self.effects(_self);
    _self.render(_self);
    _self.madeCursor();
  },
  methods: {
    effects(_self) {
      if(define_type === 'particle') {
        document.onmousemove = function(e){
          _self.createEntity(e.clientX, e.clientY);
          _self.createEntity(e.clientX, e.clientY);
        }
      }else if(define_type === 'click-word') {
        document.onclick = function(e) {
          _self.createEntity(e.clientX, e.clientY);
        }
      }
    },
    createEntity(x, y){
      let _self=this, entity = {};
      entity.id = this.GUID();
      entity.x = x;
      entity.y = y;
      entity.r = this.random(define_r.min, define_r.max);
      entity.color = this.randomColor(define_colors);
      entity.dx = this.random(define_dx.min, define_dx.max);
      entity.dy = this.random(define_dy.min, define_dy.max);

      if(define_type === 'click-word') {
        entity.word = define_words[_self.random(0,define_words.length-1)];
      }

      entity.update = function() {
          this.x += this.dx;
          this.y += this.dy;
          this.r -= 0.5;
          if(this.r <= 0){
            _self.entities.splice(_self.findIndex(_self.entities, this), 1);
          }
      }

      entity.render = function (){
        let _self=this;
        if(this.r <= 0){
          return;
        }
      
        let entity = document.createElement("div");
        entity.style.width = this.r + "px";
        entity.style.height = this.r + "px";
        entity.style.position = "fixed";
        entity.style.top = this.y + "px";
        entity.style.left = this.x + "px";
        
        if(define_type === 'particle') {
          entity.style.backgroundColor = this.color;
          entity.style.borderRadius = define_border_radius;
        } else if(define_type === 'click-word') {
          entity.style.color = this.color;
          entity.style.fontSize = define_font_size + "px";
          entity.innerText = this.word;
          entity.style.width = (this.word.length * define_font_size) + "px";
        }
        
        entity.style.zIndex=define_z_index;
        entity.className='mouse-'+define_type;
        
        document.querySelector("body").append(entity);
      }
      _self.entities.push(entity);
    },
    random(start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
      return start + Math.floor(Math.random() * (end - start + 1));
    },
    randomColor(colors) {
      if(colors && colors.length > 0) {
         let selected = this.random(0, colors.length - 1);
         return colors[selected];
      }
      // 默认红色
      return "red";
    },
    findIndex(balls, ball){
      if(!balls || !ball) {
        return -1;
      }
      for(let i=0;i<balls.length;i++) {
          if(balls[i].id == ball.id) {
            return i;
          }
      }
      return -1;
    },
    GUID() {
      function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    madeCursor() {
      if(define_cursor) {
        let reg=/(http|https):\/\/([\w.]+\/?)\S*.cur$/; 
        if(reg.test(define_cursor)) {
          document.body.style.cursor = "url("+define_cursor+"),auto";
          return;
        }
        document.body.style.cursor = "url(https://ikangxu-static.oss-cn-beijing.aliyuncs.com/images/cur/"+define_cursor+".cur),auto";
      }
    },
    render(_self) {
      if(define_type) {
        setInterval(function (){
          var mouseEntities = document.getElementsByClassName('mouse-'+define_type);
          if(mouseEntities){
            for(var i=0;i<mouseEntities.length;i++){
              mouseEntities[i].remove();
            }
          }
          for(let i=0;i<_self.entities.length;i++) {
            let entity = _self.entities[i];
            entity.update();
            entity.render();
          }
        }, 50);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>