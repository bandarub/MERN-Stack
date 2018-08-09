const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: "../tmp/uploads" });
const students = require('../../public/data_js');
var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'arysri', 
    api_key: '445193447564947', 
    api_secret: 'UIi7cwgIND_xXijh87kt1JtRGXw' 
  });


//Student Model
const Student = require('../../models/student');


// Student.collection.insert(students);

//@route GET api/students
//@desc get all students
//@access public
router.get('/',(req,res)=>{
    Student.find()
    .sort({date:-1})
    .then(doc=>{
      res.json(doc);
    })
    
});


//@route POST api/students
//@desc add-student
//@access public
router.post('/',upload.single("file"),(req,res)=>{
     
    let src ='';          
        cloudinary.v2.uploader.upload(req.file.path, {public_id:`${req.body.firstName}`},
        function(error, result) {
       
            src = result.secure_url;
            let skillsArray = req.body.skills.split(',')
          
            const newStudent = new Student({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                title:req.body.title,
                email:req.body.email,        
                nationality :req.body.nationality,
                skills:skillsArray,
                whySoftwareDeveloper:req.body.whySoftwareDeveloper,
                longTermVision:req.body.longTermVision,
                motivatesMe:req.body.motivatesMe,
                favoriteQuote:req.body.favoriteQuote,
                joinedOn:req.body.joinedOn,
                src
                });
                newStudent.save()
                .then((student)=>{
                    res.json(student)
                })
                .catch(err =>{
                    res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err.message);
                }); 
            });    
     
     
})

//@route Delete api/students/:id
//@desc delete a student
//@access public
router.delete('/:id',(req,res)=>{
    Student.findById(req.params.id)
    .then(student=>{
        student.remove()
        .then(()=>{
            res.json({success:true})
        })
    })
    .catch(err=>res.status(404).json({success:false}));
});
module.exports = router;