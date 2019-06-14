console.log('index.js > ')

const TelegramBot = require('node-telegram-bot-api')

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0'

const token = process.env.TELEGRAM_KOLMECHBOT_TOKEN

const bot = new TelegramBot(
  token,
  // {polling: true},
  {webHook: true
    // {
    // port: process.env.PORT || 8443,
    // host : process.env.HOST || '0.0.0.0'
    // }
  }
)

bot.setWebHook(process.env.TELEGRAM_WEBHOOK_URL + '/bot' + token)

bot.on('message', (msg) => {
  console.log('telegram msg received > ', msg)
  const chatId = msg.chat.id

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message')
})

module.exports = { 
  bot
}