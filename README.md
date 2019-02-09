# Module 10 Assignment LIRI CLI Program


 # Current Thoughts / Planning / TODO

   1. I want *Do What It Says* to:
      - [x] Create an animation for randomly selecting one of the other three options
      - [x] Be visually clear about what its doing with no explanation required

   2. I want *Concert This!* to:
      - [x] Prompt using inquirer to get an artist from user     
      - [x] Give the following data to user **Venue, Venue Location, Date, Time** formatted for easy viewing
      - [x] Be aesthetically pleasing
      - [x] Be called as a *function*

   3. I want *Spotify This!* to:
      - [x] Prompt using inquirer to get a song name from user
      - [x] Give the following data to user **Artist, Song Name, Preview Link, Album** formatted for easy viewing 
      - [ ] Be aesthetically pleasing
      - [x] Be called as a *function*

   4. I want *Movie This!* to:
      - [x] Prompt using inquirer to get a movie name from user
      - [x] Give the following data to user **Title, Release, Rating, Producation location, Language, Summary, Actors** formatted for easy viewing
      - [x] Be aesthetically pleasing
      - [x] Be called as a *function*

   5. I want *Liri CLI* to:
      - [ ] Be aesthetically pleasing
      - [ ] Be as readable as is possible 
      - [ ] Be **dry** like a **desert**
      - [ ] Use exports & destructuring liberally
    
------------------------------

# Issues

    very wet code for Do What It Says
    does not filter out empty calls
    isn't particularly nice to look at

-------------------------------

# In Action 

### First Call

![First Call | image](https://puu.sh/CJH4Z/c16a784ea7.png) *image*

  * Gives a list of options to choose from

![First Call | gif]("#") *gif*

  * Not much more to it
  
### Concert This!

![Concert This! image](https://puu.sh/CJHdp/0d6cd6cc0a.png) *image*

  * Shows Venue Information based on input

![Concert This! gif]("#") *gif*

  * Clears the terminal and then pushes ascii art + venue data formatted
  
 ### Spotify This!

![Spotify This! image](https://puu.sh/CJHuL/1eee167fe3.png) *image*

 * Shows Song Information based on input

![Spotify This! gif]("#") *gif*

 * Clears the terminal and then pushes ascii art + song data formatted

### Movie This!

![Movie This! image](https://puu.sh/CJHo1/38fdf91a9b.png) *image*

  * Shows Movie Information based on input

![Movie This! gif]("#") *gif*

  * Clears the terminal and then pushes ascii art + movie data formatted
  
### Do What It Says!

![Do What It Says! image](https://puu.sh/CJHt8/d12f638d9f.png) *image*

  * Randomly chooses another option

![Do What It Says! gif]("#") *gif*

  * Clears the terminal gives a visual of a random choice being made then calls one of the other options 

-------------------------------

# Notes / Comments

* Workflow will get bogged down by poor planning
* It's very easy to get lost in scope creep
* Dependencies become a nightmare eventually
