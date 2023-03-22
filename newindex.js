framework.hears(
  "reply",
  (bot, trigger) => {
    console.log("reply function");
    let monday, tuesday, wednesday, thursday, friday;
    function getWeekFunction(d) {
        return new Promise(function(resolve, reject){
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        monday = d.getMonth() + 1 + '/' + diff;
        tuesday = d.getMonth() + 1 + '/' + (diff + 1);
        wednesday = d.getMonth() + 1 + '/' + (diff + 2);
        thursday = d.getMonth() + 1 + '/' + (diff + 3);
        friday = d.getMonth() + 1 + '/' + (diff + 4);
        resolve();
        });
    }

    function getMonday(){
        return new Promise(function(resolve, reject){
            let msg = {
            text: `${monday}`,
            };
            bot.reply(trigger.message, msg);
            // console.log(monday)
            resolve();
        });
    }

    function getTuesday(){
        return new Promise(function(resolve, reject){
            let msg = {
            text: `${tuesday}`,
            };
            bot.reply(trigger.message, msg);
            // console.log(tuesday)
            resolve();
        });
    }

    function getWednesday(){
        return new Promise(function(resolve, reject){
            let msg = {
            text: `${wednesday}`,
            };
            bot.reply(trigger.message, msg);
            // console.log(wednesday)
            resolve();
        });
    }

    function getThursday(){
        return new Promise(function(resolve, reject){
            let msg = {
            text: `${thursday}`,
            };
            bot.reply(trigger.message, msg);
            // console.log(thursday)
            resolve();
        });
    }

    function getFriday(){
        return new Promise(function(resolve, reject){
            let msg = {
            text: `${friday}`,
            };
            bot.reply(trigger.message, msg);
            // console.log(friday)
            resolve();
        });
    }

    getWeekFunction(new Date())
    .then(getMonday)
    .then(getTuesday)
    .then(getWednesday)
    .then(getThursday)
    .then(getFriday);
  },
  "**reply**: (have bot reply to your message)",
  0
);
