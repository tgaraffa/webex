framework.hears(
  "reply",
  (bot, trigger) => {
    console.log("reply function");
    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();
    var date4 = new Date();
    var date5 = new Date();

    date1.setDate(date1.getDate() + 10);
    date2.setDate(date2.getDate() + 11);
    date3.setDate(date3.getDate() + 12);
    date4.setDate(date4.getDate() + 13);
    date5.setDate(date5.getDate() + 14);
    
    let Mondayday = date1.getDate();
    let Mondaymonth = date1.getMonth() + 1;
    let Tuesdayday = date2.getDate();
    let Tuesdaymonth = date2.getMonth() + 1;
    let Wednesdayday = date3.getDate();
    let Wednesdaymonth = date3.getMonth() + 1;
    let Thursdayday = date4.getDate();
    let Thursdaymonth = date4.getMonth() + 1;
    let Fridayday = date5.getDate();
    let Fridaymonth = date5.getMonth() + 1;

    let Mon = `${Mondaymonth}/${Mondayday}`;
    let Tue = `${Tuesdaymonth}/${Tuesdayday}`;
    let Wed = `${Wednesdaymonth}/${Wednesdayday}`;
    let Thu = `${Thursdaymonth}/${Thursdayday}`;
    let Fri = `${Fridaymonth}/${Fridayday}`;
    
    const card = {
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": 35,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": `Monday ${Mon}`,
                            "color": "Light"
                        },
                        {
                            "type": "TextBlock",
                            "text": `Tuesday ${Tue}`,
                            "color": "Light"
                        },
                        {
                             "type": "TextBlock",
                            "text": `Wednesday ${Wed}`,
                            "color": "Light"
                        },
                        {
                            "type": "TextBlock",
                            "text": `Thursday ${Thu}`,
                            "color": "Light"
                        },
                        {
                            "type": "TextBlock",
                            "text": `Friday ${Fri}`,
                            "color": "Light"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": 65,
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Signup"
                                }
                            ],
                          "horizontalAlignment": "Center",
                        },
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Signup"
                                }
                            ],
                          "horizontalAlignment": "Center",
                        },
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Signup"
                                }
                            ],
                          "horizontalAlignment": "Center",
                        },
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Signup"
                                }
                            ],
                          "horizontalAlignment": "Center",
                        },
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Signup"
                                }
                            ],
                          "horizontalAlignment": "Center",
                        },
                        
                    ]
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2"
}

//     var msg_attach1 = {
//       text: `${Mon}`,
//     };
//     bot.reply(trigger.message, msg_attach1);
    
//     var msg_attach2 = {
//       text: `${Tue}`,
//     };
//     bot.reply(trigger.message, msg_attach2);

//     var msg_attach3 = {
//       text: `${Wed}`,
//     };
//     bot.reply(trigger.message, msg_attach3);

//     var msg_attach4 = {
//       text: `${Thu}`,
//     };
//     bot.reply(trigger.message, msg_attach4);

//     var msg_attach5 = {
//       text: `${Fri}`,
//     };
//     bot.reply(trigger.message, msg_attach5);
    bot.reply(trigger.message, card);
  },
  "**reply**: (have bot reply to your message)",
  0
);
