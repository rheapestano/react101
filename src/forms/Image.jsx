import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { isEmpty, isInteger } from 'lodash';
import {
    Form,
    FormGroup,
    Label,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import Input from '../formComponents/Input';

const validate = (values) => {
    const errors = {};
    if (isEmpty(values.imageCount)) {
      errors.imageCount = 'Search Input is required';
    }

    return errors;
};
  
// eslint-disable-next-line import/no-mutable-exports
let SearchForm = (props) => {
    const {
        handleSubmit,
    } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="image-input">
                    Search Shibe
                </Label>
                <InputGroup>
                    <Field
                        name="imageCount"
                        type="number"
                        component={Input}
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            type="submit"
                            color="success"
                        >
                            Submit
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};
  
export default reduxForm({
    form: 'IMAGE',
    validate,
})(SearchForm);
