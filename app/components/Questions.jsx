'use client';

import React from 'react';
import { Button, Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Questions = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className='flex justify-between'>
      <Title level={2}>Questions</Title>
      <Button style={{
        backgroundColor:"#69704D",
        color:"#fff",
        borderRadius:"0px"
      }}>+ Add Question</Button>
      </div>

      <div className="space-y-6">
        {[1, 2].map((question, index) => (
          <Card key={index} className="border p-4 rounded-lg">
            <Title level={5}>Perspiciatis esse molestiae vel qui.</Title>
            <Text className="text-gray-600 block">
              Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id.
              Repudiandae incidunt doloremque. Error est et ullam.
            </Text>
            <Text strong className="block mt-2 text-green-700">User Name</Text>
            
            <Card className="mt-4 border-l-4 pl-4">
              <Title level={5}>Perspiciatis esse molestiae vel qui.</Title>
              <Text className="text-gray-600 block">
                Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id.
                Repudiandae incidunt doloremque. Error est et ullam.
              </Text>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Questions;
