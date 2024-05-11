import React from 'react';
import { Table, Image, Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const AllSupplies = ({ supplies }) => {
  const [visible, setVisible] = React.useState(false);
  const [selectedSupply, setSelectedSupply] = React.useState(null);
  const [form] = Form.useForm();

  const showModal = supply => {
    setSelectedSupply(supply);
    setVisible(true);
    form.setFieldsValue(supply);
  };

  const handleOk = () => {
    // Handle edit supply logic here
    form.validateFields()
      .then(values => {
        // Make an API call to update the supply with the new values
        console.log('Updated supply:', values);
        setVisible(false);
      })
      .catch(err => {
        console.error('Validation Error:', err);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = record => {
    // Handle delete supply logic her
    Modal.confirm({
      title: 'Are you sure you want to delete this supply?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        // Make an API call to delete the supply
        console.log('Deleted supply:', record);
      },
    });
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: text => <Image src={text} width={100} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button icon={<DeleteOutlined />} style={{ marginLeft: 8 }} onClick={() => handleDelete(record)} />
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={supplies} columns={columns} rowKey="title" />
      <Modal
        title="Edit Supply"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select a category' }]}
          >
            <Select>
              <Select.Option value="Food">Food</Select.Option>
              <Select.Option value="Drinks">Drinks</Select.Option>
              <Select.Option value="Clothing">Clothing</Select.Option>
              <Select.Option value="Household">Household</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please enter a quantity' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AllSupplies;