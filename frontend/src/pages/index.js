import { React, useState, Component, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import '../styles.css'

import axios from 'axios';

function Home() {

    const { register, handleSubmit } = useForm();

    let state = {
        'username': '',
        'list': ''
    }

    const [usersList, setUserlist] = useState(null)

    const navigate = useNavigate();

    /*
    useEffect(() => {
        function userList() {
            axios
                ({
                    method: 'GET',
                    url: `/users_list`,
                })
                .then((response) => {
                    const res = response;
                    setUserlist(res.data)
                }
                ).catch((error) => {
                    if (error.response) {
                        console.log(error.response)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    }
                })
        }
        userList();
    }, []); 
    */
    function status() {
        axios
            ({
                method: 'GET',
                url: `/user_status/${state.username}`,
                params: { 'username': state.username }
            })
            .then((response) => {
                const userestatus = response.data.userestatus;
                if (userestatus == '200') {

                    
                    axios({
                        method: 'POST',
                        url: `user/${state.username}`,
                        params: { 'username': state.username }
                    }).catch((error) => {
                        if (error.response) {
                            console.log(error.response)
                            console.log(error.response.status)
                            console.log(error.response.headers)
                        }
                    })
                    

                    navigate(`/receipt/${state.username}`, { state: { navName: state.username } });
                    console.log(state.username)
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }
    

    const onSubmit = (d) => {
        d.username = d.username.replace(/\s+/g, '')
        if (d.username == '') {
            console.log('did not input')
        }
        else {
            state.username = d.username
            status();
        }
    }

    return (
        <div>
            <div className='merchant-font'>
                <h1 className='h1-mid'>Receipterboxd</h1>
                <h2 className='h2-mid'>Generate Your Top Movies!</h2>
            </div>

            <div className='form-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Letterboxd username"
                            aria-label="Letterboxd username"
                            aria-describedby="basic-addon2"
                            {...register("username")}
                        />
                        <Button type='submit' variant="success" id="button-addon2"> Submit</Button>

                    </InputGroup>
                </form>
            </div>

        </div>
    );
};

export default Home;