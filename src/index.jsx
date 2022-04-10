import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
// import PegaCard from './PegaCard'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );

const pega = [

  {
    id: 429880,
    name: '',
    WR: 0,
    tag: 1
  },
  {
    id: 209114, 
    name: '',
    WR: 0,
    tag: 1
  },
  {
    id: 201952, 
    name: '',
    WR: 0,
    tag: 1
  },
  {
    id: 464161, 
    name: '',
    WR: 0,
    tag: 1
  },
  {
    id: 259150, 
    name: '',
    WR: 0,
    tag: 2
  },
  {
    id: 375357, 
    name: '',
    WR: 0,
    tag: 2
  },
  {
    id: 341531, 
    name: '',
    WR: 0,
    tag: 2
  },
  {
    id: 261202, 
    name: '',
    WR: 0,
    tag: 2
  },
  {
    id: 259217, 
    name: '',
    WR: 0,
    tag: 2
  },
  {
    id: 191574, 
    name: '',
    WR: 0,
    tag: 3
  },
  {
    id: 486426, 
    name: '',
    WR: 0,
    tag: 3
  },
  {
    id: 147315, 
    name: '',
    WR: 0,
    tag: 3
  },
  {
    id: 308836, 
    name: '',
    WR: 0,
    tag: 4
  },
  {
    id: 73884, 
    name: '',
    WR: 0,
    tag: 4
  },
  {
    id: 40255, 
    name: '',
    WR: 0,
    tag: 4
  },

]

const user = [
  {
    nickname: 'sangcamap',
    lockedvis: 0,
    metamask: '0x9593eB7C0358c35c9447c8223875DDE8042fB8f3',
    avatar: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/271190303_1560085204367284_1204807358380183679_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PVlPyVgpuE4AX-uf8rt&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_O8jBDAJJGA9ZHTmZxLxd1MIXR2q_kAsHWIjJx9rFoaQ&oe=62575D0A'
  },
  {
    nickname: 'dangcavoi',
    lockedvis: 0,
    metamask: '0x1AB82F7f4CDA7D186B16D189Fc597c65c9808741',
    avatar: 'https://images.unsplash.com/photo-1561279629-78600d1156b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
  },
  {
    nickname: 'Phúc Võ',
    lockedvis: 0,
    metamask: '0xbC03190c283A94B36a8F848e68D6eA6B3cD85863',
    avatar: 'https://i.pinimg.com/564x/30/db/87/30db87a5a7a3341d7d9abf7e4efae5b8.jpg'
  },
  {
    nickname: 'Tài Ho',
    lockedvis: 0,
    metamask: '0x9b1116ce15d2D1a32dEfc30Fc053a12Ffe202792',
    avatar: 'https://i.pinimg.com/564x/6a/0b/fe/6a0bfecaedfcb1ca90ebb63249410720.jpg'
  },
]


const getData = (type ,link, id, index) => {
  axios.get(`${link}/${id}`)
  .then(function (response) {
    if (type == 0){
      pega[index].name = response.data.name;
      pega[index].WR = response.data.winRate;
      pega[index].E = response.data.energy;
    }
    if (type ==1 ){
      user[index].lockedvis = response.data.lockedVis;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}  

async function run(){
  let pegaIndex = 0
  let userIndex = 0
  pega.forEach((e) => {
    getData(0,'https://api-apollo.pegaxy.io/v1/pegas',e.id, pegaIndex)
    pegaIndex +=1
  })
  user.forEach((e) =>{
    getData(1,'https://api-apollo.pegaxy.io/v1/assets/count/user',e.metamask, userIndex)
    userIndex +=1
  })
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  pega.forEach((e) =>{
    document.querySelector('.pega-grid').innerHTML += `
    <div class='pega-card'>
    <span>#${e.id}</span>
    <span>@${e.name}</span>
    <span class='rounded-box top1'>⚡: ${e.E}</span>
    <span class='rounded-box today'>WR: ${Math.round(e.WR*100)}%</span>
    </div>  
    `
  })
  user.forEach((e) =>{
    document.querySelector('.user-grid').innerHTML += `
    <div class='user-card col'>
          <span class='nickname'>${e.nickname}</span>
          <img src= ${e.avatar} />
          <div class='info'>
            <p class='bold'><span class='label'> Tổng VIS </span><span class='rounded-box hold'>${e.lockedvis}</span></p>
          </div>
      </div>
    `
  })
}





run();