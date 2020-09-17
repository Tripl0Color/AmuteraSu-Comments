const { VK } = require('vk-io'); /// Импортирование главной библиотеки
var colors = require('colors');  /// Импортирование цвета консоли
colors.setTheme({                 /// Импортирование цвета консоли
  info: 'bgGreen',                 /// Импортирование цвета консоли
  success: 'rainbow',               /// Импортирование цвета консоли
});
const vk = new VK({
token: 'вот сюда пихай токен'            /// Вставь токен сюда
});
console.log("By Tripl_color , awoken.xyz".info);      /// F Колору
function startamuu() {
vk.api.wall.createComment({
owner_id: your_vk_id,         /// Вставь свой айди сюда
post_id: your_postid,        /// Вставь айди поста сюда
message: 'vk.com/tripl_color Amuterassuu-node' /// Сюда сообщение которое будет в коментах
});
console.log("Коментарий сделан успешно".success);  /// Лог,о том что комент сделан
}

setInterval(startamuu, 1500);                /// Интервал меж коментами

/// Установи библиотеки : colors,vk-io                                                       
/// Если будут какие-то вопросы, vk.com/tripl_color
