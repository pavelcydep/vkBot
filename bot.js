const { VK } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const vk = new VK({
token:'4fa53fa00d416d28e220f6949ef1833fb5c1a01f150265721640baf9222a5dfb0533c8071f8a9ebfa091e'
})
const bot = new HearManager()
vk.updates.on('message_new', bot.middleware)

bot.hear((/привет/i), msg =>{
    msg.send(`Привет, я работаю`)}
)
bot.hear(/как дела/i , msg =>{
    msg.send(`Нормально, как у тебя`)
})
console.log('Бот запущен!')
vk.updates.start().catch(console.error)