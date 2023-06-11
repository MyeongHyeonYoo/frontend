// num1
new Vue ({
  el : '.num1',
  data : {
    count : 100
  },
  methods : {
    add(num) {
      this.count += num
    },
    del(num) {
      this.count -= num
      if (this.count <= 0) {
        alert("양의 정수만 가능합니다.")
        this.count = 0
      }
    }
  }
})

// num2
new Vue ({
  el : '.num2',
  data : {
    txt1 : "겨울"
  },
  methods : {
    push_button () {
      return this.txt1 = "겨울(winter)"
    },
    pull_button () {
      return this.txt1 = "겨울"
    }
  }
})

// num3
new Vue ({
  el : '.num3',
  data : {
    // falling_snow : "손꽁꽁!" + "발꽁꽁!"
    falling_snow : "손꽁꽁!발꽁꽁!"
  }
})

// num4
new Vue({
  el : '.num4',
  data : {
    nate : "https://www.nate.com",
    window_t: "_blank",
    balloon : "네이트이동"
  }
})

// num5
new Vue ({
  el : '.num5',
  data : {
    vue_viewport : "vue.js"
  },
  computed : {
    vue_upper() {
      return this.vue_viewport.toUpperCase();
    }
  }
})

// num6 
new Vue ({
  el : '.num6',
  data : {
    front_text : "front end"
  },
  computed : {
    front_capitalize () {
      return ((this.front_text.charAt(0).toUpperCase()) + (this.front_text.substring(1)))
    },
    front_return_t () {
      return this.front_text.charAt(4)
    }
  }
})

// num7
new Vue ({
  el : '.num7',
  data : {
    vue_text : "프론트엔드 첫걸음"
  },
  computed : {
    vue_length () {
      return this.vue_text.length
    }
  }
})