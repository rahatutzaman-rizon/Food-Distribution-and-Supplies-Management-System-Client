
import { Form, Input, Button, Select} from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddSupply = () => {
  const [form] = Form.useForm();
 

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
     
      formData.append('category', values.category);
      formData.append('title', values.title);
      formData.append('quantity', values.quantity);
      formData.append('description', values.description);

      const response = await axios.post('https://food-supply-server-1.onrender.com/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product added successfully:', response.data);
      // Reset the form after successful submission
      form.resetFields();
    
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };



  return (
    <Form form={form} name="addSupply" onFinish={onFinish} style={{ maxWidth: 600, margin: '0 auto' }}>
    
      <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Select placeholder="Select a category">
          <Option value="Food">Food</Option>
          <Option value="Drinks">Drinks</Option>
          <Option value="Clothing">Clothing</Option>
          <Option value="Household">Household</Option>
        </Select>
      </Form.Item>
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Please enter a quantity' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Supply
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddSupply;