// ex1
new Vue({
  el : "#ex1",
  data : {
    t_message : '안녕하세요!!'
  }
})


// ex2
new Vue({
  el : ".ex2",
  data : {
    t_message : '반가워요!!'
  }
})


// ex3
new Vue({
  el : "#ex3",
  data : {
    t_message : '반가워요!!',
    name : 'vue',
    age : 20
  }
})

// ex4
new Vue({
  el : "#ex4",
  data : {
    ts_message : '반가워요',
    person : {
      name : 'vue',
      age : 20,
    }
  }
})

// ex5
new Vue ({
  el : "#ex5",
  data  : {
    message : "<strong>Hello!</strong>"
  }
})

// ex6
new Vue ({
  el: "#ex6",
  data : {
    price : 1000,
    name : 'ABC'
  }
})

// ex7
new Vue ({
  el: "#ex7",
  data : {
    web : ['HTML', 'CSS' ,'JAVASCRIPT', 'VUE'],
    object : {
      name : 'true', 
      price1 : 500, 
      price2 : 1000
    }
  }
})

// ex8
new Vue ({
  el : "#ex8",
  data : {
    // txt: 'vue입니다. 오늘 날짜 : ' + new Date()
    txt: 'vue입니다. 오늘 날짜 : ' + new Date().toLocaleString()
  }
})

// ex9
new Vue ({
  el : '#ex9',
  data : {
    link : 'https://www.naver.com',
    target : '_blank',
    title : '네이버로 연결합니다.'
  }
})

// ex10
new Vue ({
  el : '#ex10',
  data : {
    v_data : 'Hello !!!!'
  }
})


// ex11 
new Vue ({
  el : '#ex11',
  data : {
    data : '어려워요',
    type1 : 'password',
    type2 : 'button'
  }
})

// ex12
new Vue  ({
  el : '#ex12',
  data : {
    msg : '안녕하세요!!'
  }
})

// ex13
new Vue  ({
  el : '#ex13',
  data : {
    year : 2022
  },
  methods : {
    plus(){
      this.year++
    },
    minus(){
      this.year--
    }
  }
})

// ex14
new Vue({
  el : "#ex14",
  data : {
    text : ""
  },
  methods : {
    oneclick() {
      this.text ='click'
    }
  }
})

// ex15
new Vue ({
  el : "#ex15",
  data : {
    count : 0
  },
  methods : {
    plus(num) {
      // this.count += 1
      this.count += num
    }
  }
})

// ex16
new Vue({
  el : '#ex16',
  data : {

  },
  methods : {
    alert() {
      alert('이벤트를 실행합니다.')
    }
  }
})

// ex17
new Vue({
  el : "#ex17",
  data : {
    txt : true
  },
  methods : {
    toggle() {
      this.txt = !this.txt
    }
  }
})

// ex18
new Vue({
  el : "#ex18",
  data : {
    code1 : [
      { txt : 'html'},
      { txt : 'css'},
      { txt : 'javascript'},
      { txt : 'jquery'}
    ]
  }
})

// ex19
new Vue({
  el : '#ex19',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.toLowerCase() // 소문자
    }
  }
})

// ex20
new Vue({
  el : '#ex20',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.indexOf("S") // 해당하는 인덱스 번호 확인
    }
  }
})

// ex21
new Vue({
  el : '#ex21',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.indexOf("a") // 해당하는 인덱스 번호 확인
    }
  }
})

// ex22
new Vue({
  el : '#ex22',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.charAt(4) // 해당하는 인덱스 번호의 문자 반환
    }
  }
})

// ex23
new Vue({
  el : '#ex23',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.substring(2, 4) // (start, end) 문자열 반환 - [end 지정 시 end 번 전까지]
    }
  }
})

// ex24
new Vue({
  el : '#ex24',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.length // 개수, 괄호() x
    }
  }
})

// ex25
new Vue({
  el : '#ex25',
  data : {
    msg : 'JAVASCRIPT'
  },
  computed : {
    r_msg(){
      return this.msg.replace("PT", "AAAA") // (n1, n2) - n1을 n2로 치환
    }
  }
})
