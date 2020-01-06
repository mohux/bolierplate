import React, { useState, useEffect, Fragment } from "react";
import { pageView } from "utils/analytics";
import Meta from "components/shared/meta";
import { useIntl, FormattedMessage } from "react-intl";
import { Form, Container, Row, Col, Button } from "reactstrap";
import InputGroup from "components/shared/inputGroup";
import validator from "validator";
const LoginPage = () => {
  const { formatMessage: translate } = useIntl();
  const [formData, setFormData] = useState({
    email: {
      value: null,
      error: null,
      errorMessage: <FormattedMessage id="inputs:email_error" />,
      validation: validator.isEmail
    },
    password: {
      value: null,
      error: null,
      errorMessage: <FormattedMessage id="inputs:password_error" />,
      validation(value = "") {
        return value.length > 3;
      }
    }
  });

  useEffect(() => {
    pageView();
  }, []);
  const loginSubmit = e => {
    e.preventDefault();
    const state = { ...formData };
    const keys = Object.keys(state);
    let hasErrors = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = state[key].value;
      if (!state[key].validation(value || "")) {
        state[key].error = state[key].errorMessage;
        hasErrors = true;
      }
    }

    setFormData(state);

    // ? what is this?
    // * to prevent form submittion on any error occurance
    if (hasErrors) {
      return;
    }

    console.table(state);
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    const state = { ...formData };

    if (!state[name].validation(value)) {
      state[name].error = state[name].errorMessage;
    } else {
      state[name].error = null;
    }
    state[name].value = value;
    setFormData(state);
  };

  return (
    <Fragment>
      <Meta title={translate({ id: "titles:login_page" })} />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={loginSubmit}>
              <InputGroup
                onChange={onInputChange}
                label={translate({ id: "inputs:email_title" })}
                type="email"
                name="email"
                error={formData.email.error}
                defaultValue={formData.email.value}
                placeholder={translate({ id: "inputs:email_placeholder" })}
              />
              <InputGroup
                onChange={onInputChange}
                label={translate({ id: "inputs:password_title" })}
                type="password"
                name="password"
                error={formData.password.error}
                defaultValue={formData.password.value}
                placeholder={translate({ id: "inputs:password_placeholder" })}
              />
              <Button color="primary">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
