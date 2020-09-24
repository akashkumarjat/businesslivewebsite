import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import '../Scss/Form.scss';
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        // sm: {
        //     span: 8,
        // },
        lg: {
            span: 24,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        // sm: {
        //     span: 16,
        // },
        lg: {
            span: 24,
        },
    },
};
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

const ContactForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <section id="contact" className="form_section">
                <div className="form_bg_img">
                    <img class='img-fluid one' src={require("../Img/download (6).png")} alt='' />
                    <img class='img-fluid two' src={require("../Img/download (7).png")} alt='' />
                    <img class='img-fluid three' src={require("../Img/download (8).png")} alt='' />
                    <img class='img-fluid four' src={require("../Img/download (9).png")} alt='' />
                </div>
                <div className="container">
                    <div className="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img class='img-fluid form_left_img' src={require("../Img/form.png")} alt='' />
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form_content">
                                <h2>Send Us Mesage For Any Info</h2>
                                <h3>Call Us For Any Emergency</h3>
                                <h4>+1 123 - 456 - 7890</h4>
                            </div>


                            <div className="form_part">
                                <Form
                                    // {...layout}
                                    {...formItemLayout}
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >

                                    <Form.Item
                                        // {...formItemLayout}
                                        name="username"
                                        label="Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="John Doe" />
                                    </Form.Item>

                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="example@gmail.com" />
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'introduction']} label="Message"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Message',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea placeholder="write your message" />
                                    </Form.Item>


                                    <Form.Item {...tailLayout}>
                                        <button className="submit_btn" type="submit" htmlType="submit">
                                            Submit<span><i class='fas fa-chevron-circle-right right-arrow'></i></span>
                                        </button>
                                    </Form.Item>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm
