import React, { useState } from 'react';
import { Table, Input, Space, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  phone: string;
  status: 'active' | 'inactive';
}

const PatientList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const columns: ColumnsType<Patient> = [
    {
      title: '患者ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender) => (
        <Tag color={gender === 'male' ? 'blue' : 'pink'}>
          {gender === 'male' ? '男' : '女'}
        </Tag>
      ),
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '在院' : '出院'}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">查看详情</Button>
          <Button type="link">编辑</Button>
        </Space>
      ),
    },
  ];

  const mockData: Patient[] = [
    {
      id: 'P001',
      name: '张三',
      age: 45,
      gender: 'male',
      phone: '13800138000',
      status: 'active',
    },
    {
      id: 'P002',
      name: '李四',
      age: 32,
      gender: 'female',
      phone: '13800138001',
      status: 'inactive',
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Input
            placeholder="搜索患者姓名或ID"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary">添加患者</Button>
        </Space>
      </div>
      <Table columns={columns} dataSource={mockData} rowKey="id" />
    </div>
  );
};

export default PatientList; 