import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {addStudent} from '../actions/studentActions';
import {
    Button,
    Modal,
    ModalHeader,
    NavLink
  } from 'reactstrap';


class AddNewStudent extends Component{

    state = {
        modal:false,
        firstName : '',
        lastName:'',
        email:'',
        title:'',
        nationality:'',
        skills:[],
        whySoftwareDeveloper:'',
        longTermVision:'',
        motivatesMe:'',
        favoriteQuote:'',
        joinedOn:'',
        file:null
    };
    toggle = ()=>{
        this.setState({modal:!this.state.modal});
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleFile = (event)=>{
        this.setState({
            file: (event.target.files[0])
          })
    }

    onSubmit = (e)=>{
        console.log(this.props);
        e.preventDefault();
        let {...data} = this.state;
        const skillsArray = this.state.skills.split(',');
        const newStudent = new FormData();
               for(let name in data){            
            newStudent.append(name,data[name]);
        }       
     
    this.props.addStudent(newStudent);   
    this.toggle();        
    }  
    
    render(){           
       
        return(
        <div>
            <Button
            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle} >
            Add Student
            </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add To Students List</ModalHeader>        
            <form onSubmit={this.onSubmit} action='/' enctype="multipart/form-data" method="POST">
                <div>
                    <input  type="text" name='firstName' placeholder="First Name " required onChange={this.onChange} />
                    <label>First Name</label>
                </div>
                <div>
                    <input  type="text" name='lastName' placeholder="Last Name" required onChange={this.onChange}/>
                    <label>Last Name</label>
                </div>
                <div>
                    <input  type="email" name='email' placeholder="Email" required onChange={this.onChange}/>
                    <label>Email</label>
                </div>
                <div>
                    <input  type="text" name='title' placeholder="Title" required onChange={this.onChange}/>
                    <label>Title</label>
                </div>
                <div>
                    <input  type="text" name='nationality' placeholder="Nationality" onChange={this.onChange} />
                    <label>Nationality</label> 
                </div>
                <div>
                    <input  type="text" name='skills' placeholder="Skills" required onChange={this.onChange}/>
                    <label>Skills</label>   
                </div>
                <div>
                    <input type='text' name='whySoftwareDeveloper' placeholder="WhySoftwareDeveloper" onChange={this.onChange}/>
                    <label>WhySoftwareDeveloper</label>
                </div>
                <div>
                    <input type='text' name='longTermVision' placeholder="LongTermVision" onChange={this.onChange}/>
                    <label>LongTermVision</label>
                </div>
                <div> 
                    <input type='text' name='motivatesMe' placeholder="What Motivates you" onChange={this.onChange}/>
                    <label>What Motivates you</label>
                </div>
                <div>
                    <input type='text' name='favoriteQuote' placeholder="Favorite Quotation" onChange={this.onChange} />
                    <label>Favorite Quotation</label>
                </div>
                <div>
                    <input type='date' name='joinedOn' placeholder="Joined On"  required onChange={this.onChange}/>
                    <label>Joined On</label> 
                </div>  
                <input type="file" name="filename" accept="image/gif, image/jpeg, image/png" onChange={this.handleFile}/>      
                <Button color="dark" style={{ marginTop: '2rem' }} type='submit' block><NavLink to='/'>Add Student</NavLink></Button>
               
            </form>
        </Modal>      
      
    </div>)
    }
}
const mapStateToProps = state => {
	return {
		student: state.student
	};
};

export default connect(
	mapStateToProps,{ addStudent }
)(AddNewStudent);
