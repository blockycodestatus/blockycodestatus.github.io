var d = document.createElement('h1')
d.style = 'text-decoration: none; font-size:30;'
d.innerHTML = `Last Checked: ${new Date()}`
d.id = 'time'
document.body.appendChild(d);
setInterval(function() {
    document.getElementById('time').innerHTML = `Last Checked: ${new Date()}`
}, Math.floor(Math.random() * 15001))