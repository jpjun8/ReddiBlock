require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'savit-test',
	clientId: /*process.env.CLIENT_ID*/ 'Iv27iEoizoSxHg',
	clientSecret: /*process.env.CLIENT_SECRET*/ 'jNrH33KgC773ZPVBUaGgdZyhd1c',
    username: /*process.env.REDDIT_USER*/ 'savit-test',
    password: /*process.env.REDDIT_PASS*/ 'savit-test'
});

const client = new Snoostorm(r);
var submission;
var sub_author;
var sub_content;

	
const streamOpts = {
	subreddit: 'savit-test',
	results: 25
};
	
const comments = client.CommentStream(streamOpts);
	
comments.on('comment', (comment) => {
	console.log(comment);
});

//run in console.log
if (comment.body === 'u/savit-test') {
	submission = getSubmission(comment.link_id);
	sub_author = submission.author_name;
	sub_content = submission.content;
}
