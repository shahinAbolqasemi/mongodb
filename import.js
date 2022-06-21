print("----- Running Initialization Mongo Script -----");

load("/seed/agent.js");
load("/seed/publish_state.js");
load("/seed/user_info.js");
load("/seed/user.js");
load("/seed/webhook.js");

db = db.getSiblingDB("DB5");

db.agent.drop();
db.agent.insertMany(agent_data);

db.publish_state.drop();
db.publish_state.insertMany(publish_state_data);

db.user_info.drop();
db.user_info.insertMany(user_info_data);

db.user.drop();
db.user.insertMany(user_data);

db.webhook.drop();
db.webhook.insertMany(webhook_data);
