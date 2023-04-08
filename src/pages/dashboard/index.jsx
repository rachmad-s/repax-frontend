import { Fragment } from "react"
import { BaseLayout } from '@/components/templates';

const Dashboard = () => {
  return (
    <Fragment>
      <div>dashboard Page</div>
    </Fragment>
  );
};

Dashboard.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Dashboard;
