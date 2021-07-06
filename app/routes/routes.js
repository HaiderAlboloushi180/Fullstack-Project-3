// Imports
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const TeacherModel = require('../models/Teacher')
const StudentModel = require('../models/Student')
const hashpassword = require('../helpers')

const setUpRoutes = (app) => {
    // 3. تسجيل مدرس جديد و تخزين بياناته | new teacher sign up
    
    // 4. تسجيل دخول مدرس و ارجاع التوكن | teacher login and response with jwt token
    
    // 5. إعداد طرق مختلفة | setup the different routes (get, post, put, delete)
    app.get('/test', (req, res) => {
        res.send('yo')
    })

    app.get('*', (req, res) => {
        res.send('Url Not Found')
    })
}

module.exports = setUpRoutes 