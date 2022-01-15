const row = document.querySelector('.row')
async function getData() {
  try{
  row.innerHTML = ''
  const response = await fetch('data.json')
  const data = await response.json()
  data.forEach(el => {
    const card = document.createElement('div')
    card.classList.add('wrapp1')
    card.classList.add(`${el.color}`)
    card.innerHTML = ` <div class="logo"><img src="${el.logo}" alt=""></div>
    <div class="card-text">
      <p class="work">${el.title}<span><img src="./images/icon-ellipsis.svg" alt=""></span></p>
     <div class="text">
      <h2><span>${el.timeframes.daily.current}</span>hrs</h2>
      <p class="last">Last Work ${el.timeframes.daily.previous}hrs</p>
      </div>
    </div>`
    row.appendChild(card)
  })
}catch(err){
  console.log(err)
}
}
getData()

async function showWeekly() {
  try{
  row.innerHTML = ''
  const response = await fetch('data.json')
  const data = await response.json()
  data.forEach(el => {
    const card = document.createElement('div')
    card.classList.add('wrapp1')
    card.classList.add(`${el.color}`)
    card.innerHTML = ` <div class="logo"><img src="${el.logo}" alt=""></div>
    <div class="card-text">
      <p class="work">${el.title}<span><img src="./images/icon-ellipsis.svg" alt=""></span></p>
     <div class="text">
      <h2><span>${el.timeframes.weekly.current}</span>hrs</h2>
      <p class="last">Last Work ${el.timeframes.weekly.previous}hrs</p>
      </div>
    </div>`
    row.appendChild(card)
  })
}catch(err){
  console.log(err)
}
}

async function showMonthly() {
  try{
  row.innerHTML = ''
  const response = await fetch('data.json')
  
  const data = await response.json()
  data.forEach(el => {
    const card = document.createElement('div')
    card.classList.add('wrapp1')
    card.classList.add(`${el.color}`)
    card.innerHTML = ` <div class="logo"><img src="${el.logo}" alt=""></div>
    <div class="card-text">
      <p class="work">${el.title}<span><img src="./images/icon-ellipsis.svg" alt=""></span></p>
     <div class="text">
      <h2><span>${el.timeframes.monthly.current}</span>hrs</h2>
      <p class="last">Last Work ${el.timeframes.monthly.previous}hrs</p>
      </div>
    </div>`
    row.appendChild(card)
  })
}catch(err){
  console.log(err)
}
}