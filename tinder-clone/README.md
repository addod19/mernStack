# Tinder Clone Project:

This project is inspired by the need and importance of adding the MERN Stack TECHNOLOGY to my skill set. While job searcing, I found out most of the companies  I apply to wanted the MERN Stack technology so I found a gap in my skill set and I decided to fill the gap. I found a tutorial and this is one of several of the clone projects I plan to build


## Technologies

- MongoDB (mongoose)
- Express
- React
- Nodejs


## Web Hosting Provider

- Firebase

## Live Version

[tinder-clone](https://tinder-clone-81ef7.firebaseapp.com/)


## Bug

The app is not displaying the images and name in the browser
Reasons: - (Backend) First, I made a mistake with the API end points request, so instead of storing the `req.body` into a variable, I instead did this `res.body`
so this made data from the post request hard to get to the database, so the `name` and `url` was not storing in the database except for `ids` and `v0` which I do not know about
         - (Logic) So the tutorial was using the `imgUrl` but I decided to use the `image files itself` so I downloaded images to the assest directory. I changed that along the way but it caused some problems in the database. Some of the contents were without `names` and `url`

## Version 1.2

- Fix the bag and add more functionalities
