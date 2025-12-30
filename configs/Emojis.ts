
const emojiTemplate = "<#ANIMATE#:#NAME#:#ID#>"
/*
To use the emojiTemplate do this:

For non animated emojis do:
emojiTemplate.replace("#ANIMATE#", "").replace("#NAME#", "Emoji_Name").replace("#ID#", "Emoji_ID")

For animated emojis do:

emojiTemplate.replace("#ANIMATE#", ":a").replace("#NAME#", "Emoji_Name").replace("#ID#", "Emoji_ID")


*/

const Emojis = {
  Error: {
    NoPermissions: null,
    NoCommand: null,
    Normal: null
  },
  Economy: {
    Bank: null,
    Wallet: null,
    Phone: {
      Apps: {
        YDCash: null,
        YDPay: null,
        Store: null,
        Bank: null
      }
    }
  }


  export default Emojis
