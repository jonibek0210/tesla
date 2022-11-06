let speed = document.querySelector('#speed[data-speed]')
let km = document.querySelector('#km')
let power = document.querySelector('#power')
let down = document.querySelector('#slow_down')

let orgSpeed = 750
let b = 60
power.innerHTML = `${orgSpeed}км`
km.innerHTML = `${b} км/ч`


speed.onclick = () => {
   let key = +speed.getAttribute('data-speed')
   orgSpeed = orgSpeed - key
   b = b + key
   power.innerHTML = `${orgSpeed}км`
   km.innerHTML = `${b} км/ч`
}

down.onclick = () => {
   let key = +speed.getAttribute('data-speed')
   orgSpeed = orgSpeed + key
   b = b - key
   power.innerHTML = `${orgSpeed}км`
   km.innerHTML = `${b} км/ч`
}

// ================================================ //

let tp = document.querySelector('#top[data-temp]')
let btm = document.querySelector('#bottom[data-temp]')
let cdn = document.querySelector('#conditioner')

let orgTemp = 20
cdn.innerHTML = `${orgTemp}°`

tp.onclick = () => {
   let key = +tp.getAttribute('data-temp')
   orgTemp = orgTemp + key
   orgSpeed = orgSpeed - key
   cdn.innerHTML = `${orgTemp}°`
   power.innerHTML = `${orgSpeed}км`
}

btm.onclick = () => {
   let key = +tp.getAttribute('data-temp')
   orgTemp = orgTemp - key
   orgSpeed = orgSpeed + key
   cdn.innerHTML = `${orgTemp}°`
   power.innerHTML = `${orgSpeed}км`
}

// ================================================ //

let disks = document.querySelector('#disks')
let disks_top = document.querySelector('#disks_top')
let disks_btm = document.querySelector('#disks_bottom')

let orgDisks = 19
disks.innerHTML = orgDisks

disks_top.onclick = () => {
   orgDisks++
   disks.innerHTML = orgDisks
}

disks_btm.onclick = () => {
   orgDisks--
   disks.innerHTML = orgDisks
}

// ================================================ //

let switch__kd = document.querySelector('#switch__kd')
let key = +switch__kd.getAttribute('data-kd')
let key2 = 5

switch__kd.onclick = () => {
   power.innerHTML = `${orgSpeed}км`
   orgSpeed = orgSpeed - key
   
   switch__kd.onclick = () => {
      power.innerHTML = `${orgSpeed}км`
      orgSpeed = orgSpeed + key2
      
   }
}
