import React,{Component} from 'react';
import {
    BrowserRouter as Router,   
    Switch,
    Route,
  }from 'react-router-dom';
import { connect } from 'react-redux';


import StudentsList from './studentslist';
import DisplayStudent from './displayStudent';
import AddStudent from './add-student';


class Links extends Component{

    getSelectedStudent = (id) => { 
    const students = this.props.student.student.students;
    console.log(students);
    let foundStudent;   
		for(let student of students){
			if(student._id === id){
				foundStudent = student;
			}
		
    }	
		return foundStudent;
    } 

    render(){   
   return(
<div> 
   <Router>
       <div>       
           
        <Switch>
            <Route exact path="/" render={(props)=>(<StudentsList {...props} getSingleStudent={this.getSelectedStudent}/>)}/>
            <Route exact path='/students/:studentId' render={(props)=>(<DisplayStudent {...props} getSingleStudent={this.getSelectedStudent}/>)}/>
            <Route exact path='/students/addStudent' component={AddStudent}/>
        
        </Switch>
        </div>
   </Router>


</div>
   );}
}
const mapStateToProps = state => {
	return {
		student: state
	}
  }
  
export default connect(mapStateToProps, null)(Links);

