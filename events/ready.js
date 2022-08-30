const client = require("../index");



client.once("ready", () => {
  
  client.user.setActivity("Semoizm Bot v1.0.2", {
    type: "WATCHING",
    name: "Semoizm Bot v1.0.2"
  });

  
  console.log(`[LOG] ${client.user.tag} is aktif!\n[LOG] Bot toplam ${client.guilds.cache.size} sunucu!\n[LOG] Bot toplam ${client.users.cache.size} kullanıcı!`)
});