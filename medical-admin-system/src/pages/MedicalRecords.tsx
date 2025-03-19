import React, { useState } from 'react';
import { Card, Input, DatePicker, Space, Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface MedicalRecord {
  id: string;
  patientName: string;
  patientId: string;
  visitDate: string;
  department: string;
  doctor: string;
  diagnosis: string;
  status: 'active' | 'completed';
}

const MedicalRecords: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const columns: ColumnsType<MedicalRecord> = [
    {
      title: '病历ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '患者姓名',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: '患者ID',
      dataIndex: 'patientId',
      key: 'patientId',
    },
    {
      title: '就诊日期',
      dataIndex: 'visitDate',
      key: 'visitDate',
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '主治医师',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: '诊断结果',
      dataIndex: 'diagnosis',
      key: 'diagnosis',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'blue' : 'green'}>
          {status === 'active' ? '进行中' : '已完成'}
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

  const mockData: MedicalRecord[] = [
    {
      id: 'MR001',
      patientName: '张三',
      patientId: 'P001',
      visitDate: '2024-03-15',
      department: '内科',
      doctor: '王医生',
      diagnosis: '高血压',
      status: 'active',
    },
    {
      id: 'MR002',
      patientName: '李四',
      patientId: 'P002',
      visitDate: '2024-03-14',
      department: '外科',
      doctor: '李医生',
      diagnosis: '骨折',
      status: 'completed',
    },
  ];

  return (
    <div>
      <Card style={{ marginBottom: 16 }}>
        <Space>
          <Input
            placeholder="搜索患者姓名或病历ID"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <RangePicker />
          <Button type="primary">搜索</Button>
          <Button>新建病历</Button>
        </Space>
      </Card>
      <Table columns={columns} dataSource={mockData} rowKey="id" />
    </div>
  );
};

export default MedicalRecords; 