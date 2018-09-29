import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };


    }

    handleChange=(e)=> {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form :', values);
            }
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]
              })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <br />
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>&nbsp;
              Or <Link to="/" className="FormField__Link">
                Create an account
              </Link>
            </FormItem>
          </Form>;
    }
}
const App = Form.create()(SignInForm);
export default App;
