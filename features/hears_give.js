const AirtablePlus = require('airtable-plus')

// baseID, apiKey, and tableName can alternatively be set by environment variables
const peopleTable = new AirtablePlus({
    tableName: 'People',
})

const typesTable = new AirtablePlus({
    tableName: 'Item Types',
})

const instancesTable = new AirtablePlus({
    tableName: 'Item Instances',
})

module.exports = function(controller) {

    controller.hears(new RegExp(/^give\s+<@([A-z0-9]+)>\s+([0-9]*)\s*(.+)/g), ['mention','direct_message'], async function(bot, message) {
        const {
            channel,
            match
        } = message

        console.log(match)

        const receiverSlackId = match[0]
        const itemQuantity = match[1] || '1'
        const itemName = match[2]

        await bot.reply(message,{
            text: `You give ${receiverSlackId} ${itemQuantity} ${itemName}`
        });
    });

}