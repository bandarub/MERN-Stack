import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {getStudents, deleteStudent} from '../actions/studentActions';
import PropTypes from 'prop-types';

import { NavLink } from '../../node_modules/reactstrap';

class StudentsList extends Component{

    componentDidMount() 
      {
          console.log('component mounted')
          this.props.getStudents();        
      }
    handleDisplay = (e)=>{ 
                this.props.history.push(`/students/${e.target.id}`)          
        }
    render(){
        return(
           
            <div> 
                <div className = 'student'>           
                {this.props.student.students.map((student) => 
                <div  className='img_wrap' key={Math.random()} id= {student._id} onClick = {this.handleDisplay}>
                <img id= {student._id} className='student-image' src ={student.src}/>
                <div className='img__description'>
                <p className='text' id= {student._id}>{student.firstName}</p>
                </div>
                </div>
                )}
                </div>
                
            </div>
        )
    }
}
StudentsList.propTypes = {
    getStudents : PropTypes.func.isRequired,
    student:PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
	return {
		student: state.student
	};
};

export default connect(mapStateToProps,{ getStudents,deleteStudent }) (StudentsList);
