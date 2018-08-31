## Contributors

| <a href="http://github.com/mercerbe" target="_blank">**Ben Mercer**</a> |
| :---: |
| [![Ben Mercer](https://avatars3.githubusercontent.com/u/35779366?s=150&v=3)](http://github.com/mercerbe) |
| <a href="http://github.com/mercerbe" target="_blank">`github.com/mercerbe`</a> |

## Local Development

This project is build using [Express](http://expressjs.com/) web framework and depends on [MongoDB](https://www.mongodb.com).

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone https://github.com/mercerbe/SMSMenuCheck
   $ cd employee-directory-node
   ```

1. Install the dependencies

  ```bash
  $ npm install
  ```

1. Make sure the tests succeed.

   ```bash
   $ npm test
   ```

1. Seed the database.

   ```bash
   $ npm run seed
   ```

1. Start the server.

   ```bash
   $ npm start
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000).

### Expose the Application to the Wider Internet

1. Expose your application to the wider internet using [ngrok](http://ngrok.com). You can click
  [here](#expose-the-application-to-the-wider-internet) for more details. This step
  is important because the application won't work as expected if you run it through
  localhost.

  ```bash
  $ ngrok http 3000
  ```

  Once ngrok is running, open up your browser and go to your ngrok URL. It will
  look something like this: `http://9a159ccf.ngrok.io`

1. Configure Twilio to call your webhooks.

  You will also need to configure Twilio to call your application when calls are received
  on your _Twilio Number_. The **SMS & MMS Request URL** should look something like this:

  ```
  http://<sub-domain>.ngrok.io/directory/search
  ```

  ![Configure SMS](http://howtodocs.s3.amazonaws.com/twilio-number-config-all-med.gif)

### How To Demo

1. Text the twilio number the name "Thor".
1. Should get the following response:

   ```
   We found multiple people, reply with:
   1 for Thor
   2 for Frog Thor
   3 for Thor Girl
   Or start over
   ```
1. Reply with 1.
1. Should get the following response:

   ```
   Thor
   +14155559999
   thor@asgard.example.com
   [the image goes here]
  ```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)

