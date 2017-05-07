// Load env vars
require('dotenv').load();
// Central server script - serves page, manages user registration
require('./server');
// Handles user inputs
require('./weplay');
// Runs emulator
require('./weplay-emulator');