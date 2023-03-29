import tagMakeCall from "../modules/tagMakeCall.js"


const root = document.getElementById('root')
const rootChild = ['header','main','footer']
const users = [];

for(let i=0 ; i<rootChild.length;i++){
  tagMakeCall(root, rootChild[i],function(element){
    element.style.border = '2px solid blue'
    element.style.width = '40vw'
    element.style.height = '25vh'
  })
}

tagMakeCall(root,'form',function(element){
  element.setAttribute('action','/')
  element.setAttribute('id','about-form')
})

const aboutForm = document.getElementById('about-form')

tagMakeCall(aboutForm,'input',function(element){
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','submit')
  element.setAttribute('id','about-btn')
})

const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

tagMakeCall(header,'form',function(element){
  element.setAttribute('id','prolog-users')
  element.setAttribute('method','post')
})

const prologUsers = document.getElementById('prolog-users')

for(let i = 0 ; i < 5 ; i++){
  tagMakeCall(prologUsers,'div',function(){})
}

for(let i = 0 ; i < 5 ; i++){
  tagMakeCall(prologUsers.children[i],'div',function(){})
  tagMakeCall(prologUsers.children[i],'input',function(element){
      element.setAttribute('type','text')
    }//콜백 끝
    )//else tagmakecall 끝
}

let divInnerText = ['name : ','birth_date : ','married : ','comment : ','nickname : ']



for(let i=0;i<divInnerText.length;i++){
  prologUsers.children[i].children[0].innerText = divInnerText[i]
}

tagMakeCall(prologUsers,'button',function(element){
  element.setAttribute('type','submit')
  element.innerText = '버튼을 누르시오'
  })

