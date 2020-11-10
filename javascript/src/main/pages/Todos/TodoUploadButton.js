import React, { useState } from "react";
import {Button, Col, Row, Container, Form} from "react-bootstrap";
import {toast} from "react-toastify";
export const TodoUploadButton = ({ addTask }) => {
    const [value, setValue] = useState("");
    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                const file = event.currentTarget[0].files[0];
                try{
                    await addTask(file);
                    event.currentTarget[0].files[0] = null;
                } catch(error){
                    toast.error(error.message, {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true
                    });

                }
                setValue("");
            }}
        >
            <Container fluid>
                <Row style={{paddingTop: 14}}>
                    <Col xs={11} style={{ padding: 0 }}>
                        <Form.Group>
                            <Form.File
                                type="file"
                                accept=".csv"
                                id="custom-file-input"
                                label="Upload a CSV"
                                custom />
                        </Form.Group>
                    </Col>
                    <Col xs={1} style={{ padding: 0 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
        </form>
    );
};