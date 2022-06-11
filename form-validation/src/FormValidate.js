import React, { Component } from 'react'
// import {connect} from 'react-redux';
import ProductList from './ProductList';

export default class FormValidate extends Component {
  constructor(props){
    super(props);

    this.state ={
      values:{
        id: "",
        number:"",
        name:"",
        email:"",
      },
    };
  }

  handleSubmitSucess = () =>{
    this.setState({
      values:{
        id: "",
        number:"",
        name:"",
        email:"",
      },
    });
  };

  handleSubmit=(evt) =>{
    evt.preventDefault();
    const { id, ...form } = this.state.values;

    if(id){
      //cập nhật
      this.props.updateForm(id, form, this.handleSubmitSucess);
    }else{
      //tạo mới
      this.props.createForm(this.state.values, this.handleSubmitSucess);
    }
    };

    handleChange = (evt) =>{
      const {value, id} = evt.target;
      this.setState((state)=>({
        values: {
          ...state.values,
          [id]:value,
        },
      }));
    };

    componentDidUpdate(prevProps){
      if(prevProps.selectedForm !==this.props.selectedForm){
        this.setState({value:{...this.props.selectedForm}});
      }
    }
  

  render() {
    return (
      <form>
        <h1 className='text-left' style={{backgroundColor:'darkslategray', color:'white', height:'70px', paddingTop:'7px'}}>
            Thông tin sinh viên
        </h1>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='mb-3' >
              <label htmlFor="id" className="form-label">
                  Mã SV
              </label>
              <input
                type='text'
                id='id'
                className='form-control'
                name='name'                            
              />
            </div>
                             
            <div className='mb-3'>
              <label htmlFor='number' className='form-label'>
                Số điện thoại
              </label>
              <input 
                type='text'
                id='number'
                className='form-control'
                name='number'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Họ tên
                </label>
                <input 
                  type='text'
                  id='name'
                  className='form-control'
                  name='name'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input 
                  type='text'
                  id='email'
                  className='form-control'
                  name='email'
                />
            </div>
          </div>
          <button className='btn btn-success'>Thêm sinh viên</button>
        </div> 
        
        <ProductList />
      </form>
      
    )
  }
}

 