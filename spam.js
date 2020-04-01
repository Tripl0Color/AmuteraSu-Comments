const { VK } = require('vk-io');
var colors = require('colors');
colors.setTheme({
  info: 'bgGreen',
  help: 'cyan',
  warn: 'yellow',
  success: 'rainbow',
  error: 'red',
  awok3n: 'italic',
  
});
const vk = new VK({
token: '864e6064bc8193ed284bf78180b170ad8632ed32e5560779ce887cd18932272893e4944c1c0e239a179f6'
});
console.log("By Tripl_color , awoken.xyz".info);

function startamuu() {
vk.api.wall.createComment({
owner_id: 472165736,
post_id: 71626,
message: 'Небесное свечение,сожги его до тла!'
});
console.log("Коментарий сделан успешно".success);

}

setInterval(startamuu, 1500);

                                                           
