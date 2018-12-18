var path = require('path');
var express = require('express');
var app = express();
require('dotenv').config();

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log('Up and Running!'));

const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function displayLeaderboard(callback) {
	var sql = "SELECT * FROM leaderboard";

	pool.query(sql, function(err, db_results) {

		if (err) {
			throw err;
		} else{
			var results = {
				sucess:true,
				list:db_results.rows
			};

			callback(null, results);
		}
		
	});

}
