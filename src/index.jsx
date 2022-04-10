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
    id: 341531,
    name: '',
    WR: 0
  },
  {
    id: 429880,
    name: '',
    WR: 0
  },
  {
    id: 209114, 
    name: '',
    WR: 0
  },
  {
    id: 201952, 
    name: '',
    WR: 0
  },
  {
    id: 464161, 
    name: '',
    WR: 0
  },
  {
    id: 259150, 
    name: '',
    WR: 0
  }

]

const user = [
  {

  }
]


const getData = (id, index) => {
  axios.get(`https://api-apollo.pegaxy.io/v1/pegas/${id}`)
  .then(function (response) {
    pega[index].name = response.data.name;
    pega[index].WR = response.data.winRate;
    pega[index].E = response.data.energy;
  })
  .catch(function (error) {
    console.log(error);
  });
}  

async function run(){
  let index = 0
  pega.forEach((e) => {
    getData(e.id, index)
    index +=1
  })
  await new Promise(resolve => setTimeout(resolve, 2000));
  pega.forEach((e) =>{
    document.querySelector('.pega-grid').innerHTML += `
    <div class='pega-card'>
    <span>#${e.id}</span>
    <span>@${e.name}</span>
    <span class='rounded-box top1'>⚡: ${e.E}</span>
    <span class='rounded-box today'>WR: ${e.WR*100}%</span>
    </div>  
    `
  })
}




run();