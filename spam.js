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
token: 'PASTE TOKEN HERE'
});
console.log("By Tripl_color , awoken.xyz".info);

function startamuu() {
vk.api.wall.createComment({
owner_id: 472165736,
post_id: 71626,
message: 'Небесное свечение,сожги его дотла!'
});
console.log("Коментарий сделан успешно".success);

}

setInterval(startamuu, 1500);

                                                           
