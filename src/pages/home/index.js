import React, { Fragment, useEffect } from "react";
import { pageView } from "utils/analytics";
import Meta from "components/shared/meta";
import { useIntl } from "react-intl";
const HomePage = () => {
  const { formatMessage: translate } = useIntl();
  useEffect(() => {
    pageView();
  }, []);

  return (
    <Fragment>
      <Meta title={translate({ id: "titles:home_page" })} />
      <div className="text-center">
        <img className="img-fluid" src="/images/sample.jpg" alt="alt" />
      </div>
    </Fragment>
  );
};

export default HomePage;
