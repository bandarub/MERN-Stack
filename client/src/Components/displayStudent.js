import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../actions/studentActions';

import {
  NavLink
}from 'react-router-dom';
// import * as Types from '../actions';


class DisplayStudent extends Component{
    handleDelete = (e)=>{
        this.props.deleteStudent(e.target.id);
    }
 
  render(){     
    const id = this.props.match.params.studentId;   
    const selctedStudent = this.props.getSingleStudent(id);
    return(<div>
        <div className='navigation'>
        <button><NavLink to='/'>Back to Students</NavLink></button>        
        <button className='delete' color="dark" style={{ marginBottom: '2rem' }} onClick = {this.handleDelete} id={selctedStudent._id}><NavLink id={selctedStudent._id} to='/'> Delete </NavLink></button>                
        </div>
    <div className='student-details'>
    <img src={selctedStudent.src}/> 
      <div  className='student-read ' >           
            <p className="student-heading"><label>firstName:</label> {selctedStudent.firstName}</p>
            <p className="student-heading"><label>lastName:</label> {selctedStudent.lastName}</p>
            <p className="student-heading"><label>Nationality:</label> {selctedStudent.nationality}</p>
            <p className="student-heading"><label>title:</label> {selctedStudent.title}</p>
            <p className="student-heading"><label>Skills:</label>{(selctedStudent.skills).map(skill=><li key={Math.random()}>{skill}</li>)} </p>
            <p className="student-heading"><label>whySoftwareDeveloper:</label>{selctedStudent.whySoftwareDeveloper}</p>
            <p className="student-heading"><label> longTermVision:</label>{selctedStudent. longTermVision}</p>
            <p className="student-heading"><label> longTermVision:</label>{selctedStudent. longTermVision}</p>
            <p className="student-heading"><label> longTermVision:</label>{selctedStudent. longTermVision}</p>
            <p className="student-heading"><label>joinedOn:</label>{selctedStudent.joinedOn}</p>
                     
        </div>
    </div>

    </div>)}
  }

export default connect(null,{deleteStudent}) (DisplayStudent);