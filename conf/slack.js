let Slack = require('slack-node');

let url = 'https://hooks.slack.com/services/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';
if (!url) { missing("SLACK_WEBHOOK_URI"); }

let slack = new Slack();

slack.setWebhook(url);

module.exports = slack;
