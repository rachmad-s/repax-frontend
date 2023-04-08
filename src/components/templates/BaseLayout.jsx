const { Fragment } = require('react');

export const BaseLayout = ({ children }) => {
  return (
    <Fragment>
      <aside>Side Nav</aside>
      <header>Top Nav</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Fragment>
  );
};

