const client = require("../index");

client.on("interactionCreate", async (interaction) => {

  if (interaction.isCommand()) {
    
    if (!interaction.isCommand()) return;

    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return interaction.followUp({ content: "an Erorr" });

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((r) => {
          if (r.value) args.push(r.value);
        });
      } else if (option.value) args.push(option.value);
    }
    try {
      command.run(client, interaction, args);
    } catch (e) {
      interaction.followUp({ content: e.message });
    }
  }
});
