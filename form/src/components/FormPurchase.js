import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormPurchase = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form, [field]:value});
        if (!!errors[field]) {
            setErrors({
                ...errors, [field] : null})
        }
    }

    const [elements, setEelements] = useState([]);
    const cardType = ["master", "visa"];
    const now = new Date;
    const year = now.getFullYear() % 100; // the last 2 digits of a full year
    const month = now.getMonth() + 1;


    const validateForm = () => {
        const {name, number, ccv, date} = form;
        const trimmedName = name ? name.replace(/ /g, "") : name;
        const newErrors = {};
        if (!name || name === '' || !RegExp('[a-zA-Z]{5,}').test(trimmedName) || RegExp('[^a-zA-Z]+').test(trimmedName)) { // regular expression for at least 5 char and check name does not contain nonalphabetic chars
            newErrors.name = 'Please enter your name with at least 5 character';
        }
        if(!number || number === '' || !RegExp('^[0-9]{16}$').test(number.trim())) {
            newErrors.number = 'Please enter 16 digits card number';
        }
        if(!ccv || ccv === '' || !RegExp('^[0-9]{3}$').test(ccv)) {
            newErrors.ccv = 'Please enter 3 digits ccv';
        }
        if (!date || date === '' || !RegExp('^(0[1-9]|1[0-2])\/([0-9]{2})$').test(date)) {
            newErrors.date = 'Please enter a valid date in the format MM/YY';
        } else {
            if(date.substring(3) < year) { // expired year
                newErrors.date = 'Expired date, please enter a valid date in the format MM/YY';
            } else if (date.substring(3) == year && date.substring(0,2) < month) { // current year, check for the month validity
                newErrors.date = 'Expired date, please enter a valid date in the format MM/YY';
            }
        }
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            const element = {
                name : document.getElementById("name").value.trim(),
                number : document.getElementById("number").value.trim(),
                type : document.getElementById("type").value,
                ccv : document.getElementById("ccv").value,
                expiration : document.getElementById("date").value
            };
            setEelements([...elements, element]);
            console.log([element]);
        }
    }


    return(
            <Form >
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Card holder name</Form.Label>
                            <Form.Control isInvalid={!!errors.name}   value={form.name} placeholder="Enter name" onChange={(e) => setField('name', e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Card number</Form.Label>
                            <Form.Control  isInvalid={!!errors.number}   value={form.number} placeholder="Card number 16 digits" onChange={(e) => setField('number', e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.number}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Card type</Form.Label>
                            {/*<Form.Control isInvalid={!!errors.type}   value={form.type} as="select"*/}
                            {/*                  defaultValue={cardType[0]} onChange={(selected) => setField('type', selected)} >*/}
                            {/*        {cardType.map(item => <option key={item} value={item}>{item }  card</option>)}*/}
                            {/*</Form.Control>*/}
                            {/*    <Form.Control.Feedback type="invalid">*/}
                            {/*        {errors.type}*/}
                            {/*    </Form.Control.Feedback>*/}
                            <Form.Control   as="select"
                                          defaultValue={cardType[0]}  >
                                {cardType.map(item => <option key={item} value={item}>{item }  card</option>)}
                            </Form.Control>
                            <Form.Text >
                                Please choose your card type.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="ccv">
                            <Form.Label>Security</Form.Label>
                            <Form.Control  isInvalid={!!errors.ccv}   value={form.ccv} placeholder="3 digits cvv" onChange={(e) => setField('ccv', e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.ccv}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3"  controlId="date">
                            <Form.Label>Expiration date</Form.Label>
                            <Form.Control  isInvalid={!!errors.date}   value={form.date} placeholder="MM/YY" onChange={(e) => setField('date', e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.date}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>


                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
    )

}
export default FormPurchase;
