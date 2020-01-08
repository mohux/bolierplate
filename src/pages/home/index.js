import React, { Fragment, useEffect } from "react";
import { pageView } from "utils/analytics";
import Meta from "components/shared/meta";
import { useIntl } from "react-intl";
import Loadable from "react-loadable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComponentLoader from "components/loaders/componentLoader";

const SliderSection = Loadable({
  loader: () => import("components/home/sliderSection"),
  // new Promise(resolve => {
  //   setTimeout(() => resolve(import("components/home/sliderSection")), 500);
  // }),
  loading: ComponentLoader
});

const HomePage = () => {
  const { formatMessage: translate } = useIntl();
  useEffect(() => {
    pageView();
  }, []);

  return (
    <Fragment>
      <Meta title={translate({ id: "titles:home_page" })} />
      <SliderSection />
    </Fragment>
  );
};

export default HomePage;
