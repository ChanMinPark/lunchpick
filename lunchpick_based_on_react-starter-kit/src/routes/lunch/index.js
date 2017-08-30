import React from 'react';
import Layout from '../../components/Layout';
import Lunch from './Lunch';

const title = 'Lunch Pick';

function action() {
  return {
    chunks: ['lunch'],
    title,
    component: (
      <Layout>
        <Lunch title={title} />
      </Layout>
    ),
  };
}

export default action;
