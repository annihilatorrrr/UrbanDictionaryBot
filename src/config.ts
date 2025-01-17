export const botToken = process.env.BOT_TOKEN as string;
export const botUsername = process.env.BOT_USERNAME;
export const logChatId = process.env.LOG_CHAT_ID;
export const adminId = process.env.ADMIN_ID;
export const statsPostTime = process.env.STATS_POST_TIME;
export const channelPostTime = process.env.CHANNEL_POST_TIME;
export const wotdAnnouncementTime = process.env.WOTD_ANNOUNCEMENT_TIME;
export const channelId = process.env.CHANNEL_ID;
export const channelLink = process.env.CHANNEL_LINK;
export const dataPath = process.env.DATA_PATH ?? "./data/";
export const maxChannelDefs = parseInt(process.env.MAX_CHANNEL_DEFS ?? "10");
export const messageCharacterLimit = parseInt(
  process.env.MESSAGE_CHARACTER_LIMIT ?? "4096",
);
