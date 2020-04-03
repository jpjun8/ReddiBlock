import { CommentStream } from 'snoostorm'
import Snoowrap from 'snoowrap';
// import Snoostorm from 'snoostorm';

import React from 'react';

require('dotenv').config();

export default class RedditPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const r = new Snoowrap({
			userAgent: 'savit-test',
			clientId: /*process.env.CLIENT_ID*/ 'q2_hIa8kSIjkMAg',
			clientSecret: /*process.env.CLIENT_SECRET*/ 'NmGMW4lP5sFYDndJpJ10v6QIldI',
			username: /*process.env.REDDIT_USER*/ 'savit-test',
			password: /*process.env.REDDIT_PASS*/ 'savit-test'
		});

		const client = new CommentStream(r, { subreddit: "savit-test", results: 25});

		client.on("item", comment => {
			console.log(comment);
		})

		//run in console.log
		// if (comments.body === 'u/savit-test') {
		// 	submission = r.getSubmission(comments.link_id);
		// 	sub_author = submission.author_name;
		// 	sub_content = submission.content;
		// }

		return(
			<div>
				<h1>Reddit API Testing Page</h1>
			</div>
		);
	}

}