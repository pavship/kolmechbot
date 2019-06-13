const TelegramBot = require('node-telegram-bot-api')

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0'

const bot = new TelegramBot(
  process.env.TELEGRAM_KOLMECHBOT_TOKEN,
  {polling: true},
  // {webHook: { 
  //   port: process.env.PORT || 8443,
  //   host : process.env.HOST || '0.0.0.0'
  // }}
)

console.log('bot > ', bot)

bot.on('message', (msg) => {
  console.log('telegram msg received > ', msg)
  const chatId = msg.chat.id

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message')
})

module.exports = { 
  bot
}