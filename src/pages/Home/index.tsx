import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Modal, Steps } from 'antd';
import { useModel } from '@umijs/max';
import styles from './index.less';
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <PageContainer ghost>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleOk} >
        <Steps current={current} items={items} />
        <div>{steps[current].content}</div>
      </Modal>
    </PageContainer>
  );
};

export default HomePage;
