import React, { Component } from 'react';
import {
  ValidationForm,
  TextInput,
  TextInputGroup,
  FileInput,
  SelectGroup,
  Checkbox,
} from 'react-bootstrap4-form-validation';

export default class TestValidation extends Component {
  constructor(props) {
    super(props);
    // If you want to use the reset state function, you need to have a reference to the ValidationForm component
    // If your React < 16.3, check https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.formRef = React.createRef();
    this.state = {
      immediate: true,
      setFocusOnError: true,
      clearInputOnReset: false,
    };
  }

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.log(e, formData, inputs);
  };

  resetForm = () => {
    const formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
  };

  render() {
    return (
      <ValidationForm
        onSubmit={this.handleSubmit}
        onErrorSubmit={this.handleErrorSubmit}
        ref={this.formRef}
        immediate={this.state.immediate}
        setFocusOnError={this.state.setFocusOnError}
        defaultErrorMessage={{ required: 'Please enter something.' }}
      >
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <TextInput name="fullName" id="fullName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <TextInputGroup
            name="email"
            id="email"
            type="email"
            prepend={<span className="input-group-text">@</span>}
            successMessage="Looks good!"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="attachment">Attachment</label>
          <FileInput
            name="attachment"
            id="attachment"
            required
            errorMessage="Please upload a file"
            fileType={['pdf']}
            maxFileSize="120 kb"
          />
        </div>

        <Checkbox
          id="isSubscribe"
          name="isSubscribe"
          label="Subscribe to newsletter"
          required
          errorMessage="Please check this..."
        />

        <div className="form-group mt-3">
          <button className="btn btn-primary">Submit</button>
          <button
            className="btn btn-default ml-2"
            type="button"
            onClick={this.resetForm}
          >
            Reset
          </button>
        </div>
      </ValidationForm>
    );
  }
}
