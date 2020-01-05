import React, { useState, useEffect, Fragment } from "react";
import { pageView } from "utils/analytics";
import Meta from "components/shared/meta";
import { useIntl, FormattedMessage } from "react-intl";
import { Form, Container } from "reactstrap";
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
        </Form>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
