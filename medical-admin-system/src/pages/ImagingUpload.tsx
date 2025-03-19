import React, { useState } from 'react';
import { Upload, Card, Table, Button, Space, message } from 'antd';
import type { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { Dragger } = Upload;

interface ImagingRecord {
  id: string;
  patientName: string;
  patientId: string;
  type: string;
  uploadTime: string;
  status: 'processing' | 'completed' | 'failed';
}

interface StatusMap {
  processing: { color: string; text: string };
  completed: { color: string; text: string };
  failed: { color: string; text: string };
}

const ImagingUpload: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        setFileList(info.fileList);
        message.success(`${info.file.name} 上传成功`);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  const columns: ColumnsType<ImagingRecord> = [
    {
      title: '影像ID',
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
      title: '影像类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '上传时间',
      dataIndex: 'uploadTime',
      key: 'uploadTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: ImagingRecord['status']) => {
        const statusMap: StatusMap = {
          processing: { color: 'blue', text: '处理中' },
          completed: { color: 'green', text: '已完成' },
          failed: { color: 'red', text: '失败' },
        };
        const { color, text } = statusMap[status];
        return <Button type="link" style={{ color }}>{text}</Button>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">查看</Button>
          <Button type="link">下载</Button>
        </Space>
      ),
    },
  ];

  const mockData: ImagingRecord[] = [
    {
      id: 'IMG001',
      patientName: '张三',
      patientId: 'P001',
      type: 'CT',
      uploadTime: '2024-03-15 10:30:00',
      status: 'completed',
    },
    {
      id: 'IMG002',
      patientName: '李四',
      patientId: 'P002',
      type: 'MRI',
      uploadTime: '2024-03-15 11:20:00',
      status: 'processing',
    },
  ];

  return (
    <div>
      <Card style={{ marginBottom: 16 }}>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
          <p className="ant-upload-hint">
            支持单个或批量上传，支持 DICOM、JPG、PNG 等格式
          </p>
        </Dragger>
      </Card>
      <Table columns={columns} dataSource={mockData} rowKey="id" />
    </div>
  );
};

export default ImagingUpload; 