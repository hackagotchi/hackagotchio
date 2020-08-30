---
title: "Saturday Summary 4"
date: 2020-08-29T17:34:08-04:00
draft: false
author: Owen Salter
excerpt: Wormholes, Websockets, and Websites!
---

I know this Saturday Summary comes after a pretty long gap between this one and
#3, but rest assured we are working hard on new features and content. This
week's Saturday Summary comes with a (temporary) website redesign and
information from Cedric on the status of the new clients.

With that being said, here are the questions for this weeks' Summary!

1. What have you been working on this past week?
2. What are you looking forward to in the client redesign?
3. How would you like to see the community develop over time?

## Question 1
This past week, Nick has finished the near-herculean task of porting the game
config from JSON embedded in Google Sheets to YAML files tracked in Git. Linus
spent most of the week working on `GotchiKit`, the iOS client library he'll be
using to write the iOS app.

Owen has been working hard on the backend, implementing new features in the
Wormhole, which is the new Websocket client that we're going to be using to
provide much faster notifications and actions between clients and the server. It
was written by Cedric, who also spent this week fixing bugs in the Wormhole and
working on a new web client.

## Question 2
Part of the new backend server is the ability to make new clients for more
places than just Slack, including the web and iOS! The Wormhole gives us a lot
more flexibility in what we can do with the clients we write. Nick is most
looking forward to player movement and other related features, and Linus is
looking forward to the native iOS app! Finally, Cedric is looking forward to
turning Hackagotchi into more of an actual game, instead of being limited to a
Slack bot.

## Question 3
A core part of Hackagotchi is the community. It's quite hard to play the game
properly without interacting with at least a few other people, and as part of
the dev team we want to see that community grow. Nick would love to see more
people on our chat software (which you can find at
[https://chat.hackagotch.io](https://chat.hackagotch.io)). Owen wants to see the
community start to create their own tools and spaces both on and off of the game
chat, and is willing to give those projects the support they need. Cedric wants
more people to play with, and especially wants more contributors to
Hackagotchi![^1]

## Conclusion
Well, that's it for this week's Saturday Summary! I'd like to get these out more
regularly. If you have any questions feel free to drop a note in [#hackstead](https://app.slack.com/client/T0266FRGM/C012J554P8T) on
the [Hack Club Slack](https://hackclub.com/community) or join us on IRC!

Happy Hacksteading!

[^1]: Find Hackagotchi's open-source components at
https://github.com/hackagotchi! You're always more than welcome to PR new code.
