const mConfig = require("../../messageConfig.json");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("All information about CraftManager"),
  userPermissions: [],
  botPermissions: [],
  run: async (client, interaction) => {
    const rEmbed = new EmbedBuilder()
      .setColor(`${mConfig.embedColorInfo}`)
      .setTitle("CraftManager's Info")
      .setDescription(
        "CraftManager is a service that assists Loxik in managing both his Minecraft servers and the associated Discord server."
      )
      .addFields(
        {
          name: "Developer(s)",
          value: "[Loxik](https://loxik.dev)",
          inline: true,
        },
        {
          name: "Useful Links",
          value:
            "[Source Code](https://github.com/NotLoxik/CraftManager)",
          inline: true,
        },
        { name: "Language", value: "JavaScript (Discord base)\nJava (Plugin base)", inline: true }
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/1165624747325935756/16dcc018b75d0ab30a0982897b556842.webp?size=1024&format=webp&width=0&height=281"
      );

    await interaction.reply({ embeds: [rEmbed] });
  },
};
