// Code starts from Here


// Importing necessary packages
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from 'dotenv';
config();



// Importing user model

import userRegisterModel from '../models/user.reg.model.js';



// Passport config
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/google/callback",
            scope: ["profile", "email"]
        },
        async (_, __, profile, done) => {
            try {
                // Check if user exists
                let newUser = await userRegisterModel.findOne({ email: profile.emails[0].value });

                if (newUser) {
                    return done(null, newUser);
                }

                // If user doesn't exist, create new user
                newUser = await userRegisterModel.create({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    isVerified: true, // Google account is already verified
                    googleId: profile.id
                });

                return done(null, newUser);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);


export default passport; 